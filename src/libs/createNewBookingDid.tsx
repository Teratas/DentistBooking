export default async function createNewBookingDid(id : string, token : string, bookingDate : string) {
    const res = await fetch(`https://wai-mai-nong-new.vercel.app:443/api/v1/dentists/${id}/bookings`, {
        method : 'POST',
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
            authorization : `Bearer ${token}`
        },
        body : JSON.stringify({
            bookingDate : bookingDate,
        })
    })
    if(!res.ok) throw new Error('Failed to Fetch');

    return await res.json();
}