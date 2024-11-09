export default async function userRegister(name : string, email : string, tel : string, password : string){
    const response = await fetch('https://wai-mai-nong-new.vercel.app:443/api/v1/auth/register', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
        },
        body: JSON.stringify({
            name : name,
            email : email,
            tel : tel,
            role: "user",
            password : password,
        })
    });
    if(!response.ok) throw new Error('Cannot Fetch This Data')
    return await response.json();
};