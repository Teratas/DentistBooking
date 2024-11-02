export interface dataType  {
    name : string,
    hospital : string,
    address : string,
    expertist : string,
    tel : string,
    picture : string,
    id? : string,
}
export default async function updateDentistProfile({id, data, token} : {id : string, data:dataType, token : string}){
    const res = await fetch(`https://wai-mai-nong-new.vercel.app:443/api/v1/dentists/${id}`, {
        method : 'PUT',
        headers : {
            'Content-Type' : 'application/json',
            authorization : `Bearer ${token}`
        },
        body : JSON.stringify({
            data
        })
    })
    if(!res.ok) throw new Error('Failed')
    return 'The dentist was successfully updated';
}