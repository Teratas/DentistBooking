export default async function getBookingById({id, token}:{id : string, token: string}){
    const res = await fetch(`https://wai-mai-nong-new.vercel.app:443/api/v1/bookings/${id}`, {
        method : 'GET',
        headers : {
            authorization : `Bearer ${token}`
        }
    })
    if(!res.ok) throw new Error('Failed to fetch')
    return await res.json();
}