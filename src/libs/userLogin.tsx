import { redirect } from "next/dist/server/api-utils";

export default async function userLogin(userEmail : string, userPassword : string) {
    const response = await fetch('https://wai-mai-nong-new.vercel.app:443/api/v1/auth/login', {
    
        method : 'POST',
        mode : 'cors',
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            email : userEmail,
            password : userPassword,
        }),
        
    })
    if(!response.ok) throw new Error('Failed to fetch Hospital');

    //if(response.ok)return await response.json();
    return await response.json();

}
