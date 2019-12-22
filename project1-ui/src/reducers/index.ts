import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import { User } from "../models/users";
import { Reimbursement } from "../models/reimbursement";
import { reimbursementReducer } from "./reimbursement-reducer";
import { useridReducer } from "./userid-reducer";


//this file will contain the type definitions for our store
//there will be many interfaces, that contain what each chunk of store should have
//there will be a special function called combine reducers
//this function will take all of the individual reducers and turn them into one super reducer

//this is specifically, the state from the login component
//other things will be able to use it, but it is under the name of login
export interface ILoginState {
    user:User
}

//will be the typing of our entire global state
export interface IState{
    login:ILoginState,
    reimb: IReimbursement  
    uid:IUser

}

//this will combine all of our reducers
//and make sure they fulfill the state required by IState
export const state = combineReducers<IState>({
    login:loginReducer, 
    reimb:reimbursementReducer,  
    uid:useridReducer
})

export interface IReimbursement{
    reimbursement:Reimbursement[]
}

export interface IUser{
    user:User
}