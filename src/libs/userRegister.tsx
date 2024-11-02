export default async function userRegister(name : string, email : string, tel : string, password : string){
    const response = await fetch('https://wai-mai-nong-new.vercel.app:443/api/v1/auth/register', {
        method: "POST",

        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify({
            name : name,
            email : email,
            tel : tel,
            role: "user",
            password : password,
        })
    });
    console.log({
        name : name,
        email : email,
        tel : tel,
        role: "user",
        password : password,
    })
    console.log(`${name} ${email} ${tel} ${password}`)
    
    const data = await response.json();
    if (response.ok) {
        console.log('Registration successful:', data);
    } else {
        console.error('Registration failed:', data);
    }
    console.log(data)
    return await data;
};