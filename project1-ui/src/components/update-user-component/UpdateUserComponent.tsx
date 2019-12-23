import React, { SyntheticEvent } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { updateUser } from "../../remote/update-user";


export class UpdateUserComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            userId: '',
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: ''
        }
    }

    updateUserId = (e: any) => {
        this.setState({
            ...this.state,
            userId: e.target.value
        })
    }

    updateUsername = (e: any) => {
        this.setState({
            ...this.state,
            username: e.target.value
        })
    }

    updatePassword = (e: any) => {
        this.setState({
            ...this.state,
            password: e.target.value
        })
    }

    updateFirstname = (e: any) => {
        this.setState({
            ...this.state,
            firstName: e.target.value
        })
    }

    updateLastname = (e: any) => {
        this.setState({
            ...this.state,
            lastName: e.target.value
        })
    }

    updateEmail = (e: any) => {
        this.setState({
            ...this.state,
            email: e.target.value
        })
    }

    submitUpdate = async (e: SyntheticEvent) => {
        e.preventDefault()
        try {
            let u = await updateUser(
                this.state.userId,
                this.state.username,
                this.state.password,
                this.state.firstName,
                this.state.lastName,
                this.state.email
            )
            if (u.status === 200) {
                this.setState({
                    ...this.state
                })
            } else {
                this.setState({
                    ...this.state
                })
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className="idinput">
                <Form onSubmit={this.submitUpdate} className="updateComponent">
                    <FormGroup>
                    <Label for="exampleID"><h5> User Update </h5></Label><br />
                        <Label for="userId">User ID</Label>
                        <Input type="text" name="userId" id="userId" value={this.state.userId} onChange={this.updateUserId} placeholder="User ID" />
                    </FormGroup>
                    {/* <FormGroup>
                        <Label for="username">User Name</Label>
                        <Input type="text" name="username" id="username" value={this.state.username} onChange={this.updateUsername} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="text" name="password" id="password" value={this.state.password} onChange={this.updatePassword} />
                    </FormGroup> */}
                    <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input type="text" name="firstName" id="firstName" value={this.state.firstName} onChange={this.updateFirstname} placeholder="Firstname" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input type="text" name="lastName" id="lastName" value={this.state.lastName} onChange={this.updateLastname} placeholder="Lastname" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" value={this.state.email} onChange={this.updateEmail} placeholder="Email" />
                    </FormGroup>
                    <br />
                    <Button type="submit" variant="contained" color="info" >Update </Button>
                </Form>
            </div>
        )
    }
}