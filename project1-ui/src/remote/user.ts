import { uUserClient } from "./user-clients/user-client";



export async function userLogin(username: string, password: string) {
    //another example of the enhanced object literal
    //this object has a field called username with a value of the passed in username
    //and the same for password
    const credentials = {
        username,
        password
    }
    try {
        const response = await uUserClient.post('/login', credentials)
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: undefined
            }
        }
    } catch (e) {
        console.log(e);
        throw new Error('Something Went Wrong')
    }

}
//hits get on /gardens to recieve all gardens
export const getAllUsers = async () => {
    try {
        let response = await uUserClient.get('/users')
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: undefined
            }
        }
    } catch (e) {
        console.log(e);
        throw new Error('Something Went Wrong')
    }
}



     // without Redux & axios

// export async function userLogin(username: string, password: string) {

//     const credentials = {
//         username,
//         password
//     }
//     try {
//         //this object is the config for our request
//         // to set headers and method 
//         const response = await fetch('http://localhost:3001/login', {
//             method: 'POST',
//             credentials: 'include',
//             body: JSON.stringify(credentials),
//             headers: {
//                 'content-type': 'application/json' // the client tells the server what type of data is actually sent
//             }
//         })
//         let test = await response.json()
//         console.log(test);
//         return test;
//     } catch (e) {
//         console.log(e);
//     }


// }