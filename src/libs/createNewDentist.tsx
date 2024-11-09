import { dataType } from "./updateDentistProfile";

export default async function createNewDentist(token : string,dentistData : dataType){
    const res = await fetch('https://wai-mai-nong-new.vercel.app:443/api/v1/dentists', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            authorization : `Bearer ${token}`
        },
        body : JSON.stringify({
            name : dentistData.name,
            hospital : dentistData.hospital,
            address : dentistData.address,
            expertist : dentistData.expertist,
            tel : dentistData.tel,
            picture : dentistData.picture
        })
    })
    return res.json();
}