import { Reimbursement } from "../models/reimbursement";
import { ReimbTypes } from "../action-mappers/reimbursement-action-mappers";
import { IReimbursement } from ".";


const initialState: IReimbursement = {
    reimbursement: [new Reimbursement(0, 0, 0, 0, 0, '', 0, 0, 0)]
}


export const reimbursementReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case ReimbTypes.SUCCESSFUL_REIMBURSEMENT: {
            return {
                ...state,
                reimbursement: action.payload.reimbursement
            }
        }
        default:
            return state
    }
}