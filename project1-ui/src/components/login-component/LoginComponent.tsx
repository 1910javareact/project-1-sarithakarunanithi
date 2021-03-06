import React, { SyntheticEvent } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { User } from '../../models/users'

//we need to pass in
interface ILoginComponentProps {
    user: User
    uLogin: (u: string, p: string) => void
}

export class LoginComponent extends React.Component<ILoginComponentProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    //Username
    updateUsername = (e: any) => {
        this.setState({
            ...this.state,
            username: e.target.value
        })
    }
    //Password
    updatePassword = (e: any) => {
        this.setState({
            ...this.state,
            password: e.target.value
        })
    }
    // Submit Login
    submitLogin = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.uLogin(this.state.username, this.state.password)
        this.setState({             // clear input value after submit the form
            username: '',
            password: ''
        })
    }

    render() {
        return (
            <div className="idinput">
                <Form onSubmit={this.submitLogin}>
                    <FormGroup>
                        <h5>Please have your Login Infomation :</h5><br/>
                        <Label for="exampleUsername" className="formlable" >Username :</Label>
                        <Input value={this.state.username} onChange={this.updateUsername} type="text" name="username" id="exampleUsername" placeholder="Username" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password :</Label>
                        <Input value={this.state.password} onChange={this.updatePassword} type="password" name="password" id="examplePassword" placeholder="Password" />
                    </FormGroup>
                    <Button onClick={this.submitLogin} color='info'>Login</Button>
                </Form>
                <p>{this.props.user.name}</p>
            </div>
        )
    }
}