import { getReimbursementById } from "../remote/reimbursement-by-user"


export const ReimbUserTypes = {
    INVALID_CREDENTIALS: 'TOKEN_HAS_EXPIRED',
    SUCCESSFUL_REIMBURSEMENT: 'REIMBURSEMENT_FOUND',
    UNSUCCESSFUL_FAILED: 'REIMBURSEMENT_NOT_FOUND'
}
export const reimbursementID = (id:number) => async (dispatch:any) => {

    try{
        let res = await getReimbursementById(id)
        if(res.status === 200){
            dispatch({
                type:ReimbUserTypes.SUCCESSFUL_REIMBURSEMENT,
                //payload - data comimg from server 
                payload:{
                    reimbursement:res.body
                }
            })
        }else{
            dispatch({
                type:ReimbUserTypes.INVALID_CREDENTIALS
            })
        }
    }catch(e){
        dispatch({
            type:ReimbUserTypes.UNSUCCESSFUL_FAILED
        })
    }   
}
