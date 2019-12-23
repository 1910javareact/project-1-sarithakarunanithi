import { uUserClient } from "./user-clients/user-client"


export async function updateReimbursement(reimbursementId: number, author: number, amount: number, description: string, resolver: number){
    const updateField = {
        reimbursementId,
        author,
        amount,
        description,
        resolver,
    }
    try {
        let response = await uUserClient.patch('/reimbursements', updateField)
        if(response.status === 200) {
            return{
                status:response.status,
                body: response.data
            }
        } else {
            return{
                status: response.status,
                body: undefined
            }
        }
    } catch (e){
        console.log(e);
        throw new Error('Something Went Wrong')       
    }
}