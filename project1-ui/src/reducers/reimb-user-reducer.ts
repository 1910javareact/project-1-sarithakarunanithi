import { ReimbUserTypes } from "../action-mappers/reimbuser-action-mappers"
import { IReimbursementUser } from "."
import { Reimbursement } from "../models/reimbursement"


const initialState: IReimbursementUser = {
    reimbursement: [new Reimbursement(0, 0, 0, 0, 0, '', 0, 0, 0)]
 }
 
 
 export const reimbursementUserReducer = (state = initialState, action:any) => {
     
     switch (action.type) {
         case ReimbUserTypes.SUCCESSFUL_REIMBURSEMENT:{
             return {
                 ...state,
                 reimbursement:action.payload.reimbursement,
             }
         }
         default:
             return state
     } 
 }
