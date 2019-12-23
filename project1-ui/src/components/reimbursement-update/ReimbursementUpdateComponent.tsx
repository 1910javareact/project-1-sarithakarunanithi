import React, { SyntheticEvent } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { updateReimbursement } from "../../remote/reimbursement-update";


export class ReimbursementUpdateComponent extends React.Component<any, any> {
    constructor(props: any){
        super(props)
        this.state = {
            reimbursementId: '',
            author: '',
            amount: '',
            description: '',
            resolver: ''
        }
    }

    updateReimbursementId = (e:any) => {
        this.setState({
            ...this.state,
            reimbursementId: e.target.value
        })
    }

    updateAuthor = (e:any) => {
        this.setState({
            ...this.state,
            author: e.target.value
        })
    }
    updateAmount = (e:any) => {
        this.setState({
            ...this.state,
            amount: e.target.value
        })
    }




    updateDescription = (e:any) => {
        this.setState({
            ...this.state,
            description: e.target.value
        })
    }
    updateResolver = (e:any) => {
        this.setState({
            ...this.state,
            resolver: e.target.value
        })
    }

    submitUpdate = async (e: SyntheticEvent) => {
        e.preventDefault()
        try {
            let u = await updateReimbursement(
                this.state.reimbursementId,
                this.state.author,
                this.state.amount,
                this.state.description,
                this.state.resolver,
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
                    <Label for="exampleID"><h5> Reimbursement Update </h5></Label><br />
                        <Label for="ReimbursementId">Reimbursement ID</Label>
                        <Input type="text" name="ReimbursementId" id="reimbursementId" value={this.state.ReimbursementId} onChange={this.updateReimbursementId} placeholder="Reimbursement Id" />
                    </FormGroup>      
                    <FormGroup>
                        <Label for="author">Author</Label>
                        <Input type="text" name="author" id="author" value={this.state.author} onChange={this.updateAuthor} placeholder="Author" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="text" name="description" id="description" value={this.state.description} onChange={this.updateDescription} placeholder="Description" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="resolver">Resolver</Label>
                        <Input type="text" name="resolver" id="resolver" value={this.state.resolver} onChange={this.updateResolver} placeholder="Resolver" />
                    </FormGroup>
                    <br />
                    <Button type="submit" variant="contained" color="info" >Update </Button>
                </Form>
            </div>
        )
    }
}