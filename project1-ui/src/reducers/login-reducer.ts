import { ILoginState } from "."
import { User } from "../models/users"
import { uLoginTypes } from "../action-mappers/login-action-mappers"

//the reducer is the only thing allowed to change values in state
//so we pass in state, and the action to update state
//this is an example action
// {
//     type:'SomeString',
//     payload:{
//         with: some data
//     }
// }
const initialState: ILoginState = {
    user: new User(0, '', '', '', '', '', [])
}


//whatever this reducer returns, becomes the total state of the store
//do not forget to spread state
export const loginReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case uLoginTypes.SUCCESSFUL_LOGIN: {
            //we return the new total state
            //dont forget to spread
            return {
                ...state,
                user: action.payload.user
            }
        }
        default:
            return state
    }
}