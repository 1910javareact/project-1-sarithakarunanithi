import React, { SyntheticEvent } from "react"
import { RouteComponentProps } from "react-router"
import { User } from "../../models/users"
import { Form, FormGroup, Label, Input, Button, Table } from "reactstrap"
import { UseridDisplayRowComponent } from "./userid-display-row/UseridDisplayRowComponent"

interface IUseridProps extends RouteComponentProps{
    user: User[]
    userID: (id:number) => void
    
}


export class UseridComponent extends React.Component<IUseridProps,any>{

    constructor(props: any){
        super(props)
        this.state = {
            id:undefined
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
        this.props.userID(this.state.id)
    }

    render(){
        let rows = this.props.user.map((e) => {
            return <UseridDisplayRowComponent user = {e} key = {'user' + e.userId} />
        })
        return(
            <div>
                <Form onSubmit={this.submitId}>
                    <FormGroup>
                        <Label for="exampleID">ID</Label>
                        <Input value={this.state.id} onChange={this.updateId} type="number" name="ID" id="exampleID" placeholder="User ID" />
                    </FormGroup>
                    <Button color='danger'>Submit</Button>
                </Form>

                <Table bordered color='danger'>
                    <thead>
                        <tr>
                            <td>UserID</td>
                            <td>Firstname</td>
                            <td>Lastname</td>
                            <td>Email</td>
                            <td>Role</td>
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