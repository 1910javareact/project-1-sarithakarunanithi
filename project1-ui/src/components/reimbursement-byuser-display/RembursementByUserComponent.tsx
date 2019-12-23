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
    //submt button 
    submitId = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.reimbursementID(this.state.id)
    }
    
    render() {
        let rows = this.props.reimbursement.map((e) => {
            return <ReimbursementByUserDisplayRow reimbursement={e} key={'reimbursement' + e.reimbursementId} />//mapping  through keys and value ,Reimbursement is the key and + e.reimbursementId is the value
        })
        return (

            <div className ="form">
                <Form onSubmit={this.submitId}>
                    <FormGroup>
                        <Label for="exampleID">ID</Label>
                        <Input value={this.state.id} onChange={this.updateId} type="number" name="ID" id="exampleID" placeholder="with a placeholder" />
                    </FormGroup>
                    <Button color='primary'>Submit</Button>
                </Form>
                <Table bordered color='danger'>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Author</td>
                            <td>Amount</td>
                            <td>Date Submitted</td>
                            <td>Date Resolved</td>
                            <td>Description</td>
                            <td>Status</td>
                            <td>Resolver</td>
                            <td>Type</td>
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

























// import React from "react";
// import { RouteComponentProps } from "react-router";
// import { Reimbursement } from "../../models/reimbursement";
// import { SyntheticEvent } from "react";
// import { ReimbursementDisplayRowComponent } from "../reimbursement-bystatus-display/reimbursementstatus-display-row/ReimbursementDisplayRowComponent";
// import { Form, FormGroup, Label, Input, Button, Table } from "reactstrap";




// interface IReimbursementUserProps extends RouteComponentProps{
//     reimbursement: Reimbursement[]
//     reimbUserID: (id: number) => void
// }

// export class ReimbursementByUserComponent extends React.Component<IReimbursementUserProps, any>{
//     constructor(props: any){
//         super(props)
//         this.state = {
//             id: undefined
//         }
//     }

//     updateId = (e: any) => {
//         this.setState({
//             ...this.state,
//             id: e.target.value
//         })
//     }

//     submitId = async(e:SyntheticEvent) =>{
//         e.preventDefault()
//         this.props.reimbUserID(this.state.id)
//     }

//     render(){
//         let rows = this.props.reimbursement.map((e) => {
//             return <ReimbursementDisplayRowComponent reimbursement={e} key ={'reimbursement' + e.reimbursementId} />
//         })

//         return(
//             <div className="idinput">
//                 <Form onSubmit={this.submitId}>
//                     <FormGroup>
//                         <Label for="exampleID">Reimbursement ID</Label>
//                         <Input value={this.state.id} onChange={this.updateId} type="number" name="ID" id="exampleID" placeholder="User Id" />
//                     </FormGroup>
//                     <Button color='info'>Submit</Button>
//                 </Form>
//                 <br />
//                 <h4>Reimbursement Information</h4>
//                 <Table bordered color='danger'>
//                     <thead>
//                         <tr>
//                             <td>ReimbursementID</td>
//                             <td>Author</td>
//                             <td>Amount</td>
//                             <td>Description</td>
//                             <td>Resolver</td>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {rows}
//                     </tbody>
//                 </Table>
//             </div>
//         )
//     }



// }