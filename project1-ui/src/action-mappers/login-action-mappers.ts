import { userLogin } from "../remote/user"

// we will make an object with constant values
// so we dont have to worry about spelling
export const uLoginTypes = {
    INVALID_CREDENTIALS: 'U_LOGIN_INVALID_CREDENTIALS',
    SUCCESSFUL_LOGIN: 'U_LOGIN_SUCCESSFUL_LOGIN',
    UNSUCCESSFUL_LOGIN: 'U_LOGIN_FAILED_LOGIN'
}

// first action mapper
//it is going to try and login
// depending on what we get back & it will return a different action
// this action will sent to dispatch
// this is tricky, because we are doing an async operation
// when we do async, we return a function that returns an action
//then, redux thunk is going to intercept that function, and call it when the async is done

export const uLogin = (username:string, password:string) => async (dispatch:any) => {

    try{
        let res = await userLogin(username, password)
        //a successful login
        if(res.status === 200){
            //this is how do it when we have async operations
            //Actions must have a type property that indicates the type of action being performed.
            //initiate a dispatch, pass the result to the dispatch() function
            dispatch({
                type:uLoginTypes.SUCCESSFUL_LOGIN,
                payload:{
                    user:res.body
                }
            })
        }else{
            dispatch({
                type:uLoginTypes.INVALID_CREDENTIALS
            })
        }
    }catch(e){
        dispatch({
            type:uLoginTypes.UNSUCCESSFUL_LOGIN
        })
    }   
}
