import React, { SyntheticEvent } from 'react'
import { RouteComponentProps } from 'react-router'
import { Reimbursement } from '../../models/reimbursement'
import { ReimbursementDisplayRowComponent } from './reimbursementstatus-display-row/ReimbursementDisplayRowComponent'
import { Table, Form, FormGroup, Label, Input, Button } from 'reactstrap'

interface IReimbursementDisplayProps extends RouteComponentProps {
    reimbursement: Reimbursement[]
    reimbursementID: (id: number) => void
}


export class ReimbursementByStatusComponent extends React.Component<IReimbursementDisplayProps, any>{

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
            return <ReimbursementDisplayRowComponent reimbursement={e} key={'reimbursement' + e.reimbursementId} />
        })

        return (
            <div className="idinput">
                <Form onSubmit={this.submitId}>
                    <FormGroup>
                        <Label for="exampleID"><h5>Reimbursement ID</h5></Label>
                        <Input value={this.state.id} onChange={this.updateId} type="number" name="ID" id="exampleID" placeholder="Have your Id" />
                    </FormGroup>
                    <Button color='info'>Submit</Button>
                </Form>
                <br />
                <h4>Reimbursement Information</h4>
                <Table bordered color='danger'>
                    <thead>
                        <tr>
                            <td>ReimbursementID</td>
                            <td>Author</td>
                            <td>Amount</td>
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
