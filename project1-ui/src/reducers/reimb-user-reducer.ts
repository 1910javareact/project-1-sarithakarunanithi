import { ReimbUserTypes } from "../action-mappers/reimbuser-action-mappers"
import { IReimbursementUser } from "."
import { Reimbursement } from "../models/reimbursement"


const initialState: IReimbursementUser = {
    reimbursement: [new Reimbursement(0, 0, 0, 0, 0, '', 0, 0, 0)]
 }// IReimbursement we are a calling this interface from index.ts and initialStarter is an object which contain properties (Reimbursement) and Reimbursement has an array of new reim datatype
 
 
 //whatever this reducer returns, becomes the total state of the store
 //do not forget to spread state
 export const reimbursementUserReducer = (state = initialState, action:any) => {
     
     switch (action.type) {
         case ReimbUserTypes.SUCCESSFUL_REIMBURSEMENT:{
             //we return the new total state
             //dont forget to spread
             return {
                 ...state,
                 reimbursement:action.payload.reimbursement,
                // reimbursement:state.reimbursement
             }
         }
         default:
             return state
     }
 
 }



// import { IReimbursementUser } from ".";
// import { Reimbursement } from "../models/reimbursement";
// import { ReimbUserTypes } from "../action-mappers/reimbuser-action-mappers";


// const initialState: IReimbursementUser = {
//     reimbursement: [new Reimbursement(0,0,0,0,0,'',0,0,0)]
// }

// export const reimbUserReducer = (state = initialState, action: any) => {
 
//     switch(action.type) {
//         case ReimbUserTypes.SUCCESSFUL_REIMBURSEMENT: {
//             return {
//                 ... state,
//                 reimbursement: action.payload.reimbursement
//             }
//         }
//         default:
//             return state
//     }
// }