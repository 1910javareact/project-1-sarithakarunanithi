import { uUserClient } from "./user-clients/user-client";


export const getReimbursementById= async (id:number) => {
    try{
        let response = await uUserClient.get('/reimbursements/user/' + id)
        if(response.status === 200){
            return{
                status:response.status,
                body:response.data
            }
        }else{
            return {
                status:response.status,
                body:undefined
            }
        }
    }catch(e){
        console.log(e);
        throw new Error('Something Went Wrong')
    }
}
