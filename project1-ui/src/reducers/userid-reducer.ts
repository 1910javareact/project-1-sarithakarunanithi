import { User } from "../models/users";
import { state, IUser } from ".";
import { UTypes } from "../action-mappers/userid-action-mappers";
import { Role } from "../models/role";



const initialState: IUser = {
    user: new User(0, '', '', '', '', '',[])
}

export const useridReducer = (state = initialState, action:any) => {

    switch(action.type){
        case UTypes.SUCCESSFUL_USER:{
            return{
                ...state,
                user:action.payload.user
            }
        }
        default:
            return state
    }
}