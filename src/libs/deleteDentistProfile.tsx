export default async function deleteDentistProfile(id : string, token : string){
    const response = await fetch(`https://wai-mai-nong-new.vercel.app:443/api/v1/dentists/${id}`, {
        method: 'DELETE',
        headers : {
            authorization : `Bearer ${token}`
        }
    })
    if(!response.ok) throw new Error('Failed to Delete')
    return response.json()
}