import { RouteComponentProps } from "react-router"
import { Reimbursement } from "../../models/reimbursement"
import React, { SyntheticEvent } from "react"
import { Form, FormGroup, Label, Input, Button, Table } from "reactstrap"
import { ReimbursementByUserDisplayRow } from "./reimbursement-byuser-display-row/ReimbursementUserDisplayRowComponent"


interface IRembursementByUserDisplayProps extends RouteComponentProps {
    reimbursement: Reimbursement[]
    reimbursementID: (id: number) => void

}

export class RembursementByUserComponent extends React.Component<IRembursementByUserDisplayProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            id: undefined
        }
    }

    updateId = (e: any) => {
        this.setState({
            ...this.state,
            id: e.target.value
        })
    }

    submitId = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.reimbursementID(this.state.id)
        this.setState({
            id: ''
        })
    }

    render() {
        let rows = this.props.reimbursement.map((e) => {
            return <ReimbursementByUserDisplayRow reimbursement={e} key={'reimbursement' + e.reimbursementId} />
        })
        return (

            <div className="idinput">
                <Form onSubmit={this.submitId}>
                    <FormGroup>
                        <Label for="exampleID"><h5>Reimbursement User ID</h5></Label>
                        <Input value={this.state.id} onChange={this.updateId} type="number" name="ID" id="exampleID" placeholder="User ID" />
                    </FormGroup>
                    <Button color='info'>Submit</Button>
                </Form>
                <br />
                <h4>Reimbursement Information</h4>
                <Table bordered color='danger' dark>
                    <thead>
                        <tr>
                            <td>ReimbursementID</td>
                            <td>Author</td>
                            <td>Amount</td>
                            <td>Date Submitted</td>
                            <td>Date Resolved</td>
                            <td>Description</td>
                            <td>Resolver</td>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
            </div>
        )
    }
}
