import React from "react"
import { Reimbursement } from "../../../models/reimbursement"


interface  IReimbursementByUserDisplayRowProps{
    reimbursement: Reimbursement
 }

export const ReimbursementByUserDisplayRow: React.FC<IReimbursementByUserDisplayRowProps> = (props) =>{
return(
    <tr>
    <td>{props.reimbursement.reimbursementId}</td>
    <td>{props.reimbursement.author}</td>
    <td>{props.reimbursement.amount}</td>
    <td>{props.reimbursement.dateSubmitted}</td>
    <td>{props.reimbursement.dateResolved}</td>

    <td>{props.reimbursement.description}</td>
    <td>{props.reimbursement.status}</td>
    <td>{props.reimbursement.resolver}</td>
    <td>{props.reimbursement.type}</td>

</tr>
)
}


























// import React from 'react'
// import { Reimbursement } from "../../../models/reimbursement"

// interface IReimbursementDisplayRowProps {
//     reimbursement: Reimbursement
// }

// export const ReimbursementUserDisplayRowComponent: React.FC<IReimbursementDisplayRowProps> = (props) => {
//     return (
//         <tr>
//             <td>{props.reimbursement.reimbursementId}</td>
//             <td>{props.reimbursement.author}</td>
//             <td>{props.reimbursement.amount}</td>
//             <td>{props.reimbursement.description}</td>
//             <td>{props.reimbursement.resolver}</td>
//         </tr>
//     )
// }