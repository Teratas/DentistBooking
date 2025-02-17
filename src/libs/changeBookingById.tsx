export default async function changeBookingById(id : string, token : string, bookingDate : string){
    const res=await fetch(`https://wai-mai-nong-new.vercel.app:443/api/v1/bookings/${id}`, {
        method : 'PUT',
        headers : {
            'Accept' : '*/*',
            authorization : `Bearer ${token}`,
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
            bookingDate : bookingDate
        })
    })
    if(!res.ok) throw new Error('Failed to fetch')
    return await res.json();
}