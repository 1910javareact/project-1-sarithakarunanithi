import React from "react"
import { User } from "../../../models/users"

interface IUseridDisplayRowComponent {
    user: User
}

export const UseridDisplayRowComponent: React.FC<IUseridDisplayRowComponent> = (props) => {
   return(
   <tr>
       <td>{props.user.userId}</td>
       <td>{props.user.firstName}</td>
       <td>{props.user.lastName}</td>
       <td>{props.user.email}</td>
       <td>{props.user.role}</td> 
   </tr>
   ) 
}