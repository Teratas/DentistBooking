export default async function getAllBooking(token : string) {
    const res = await fetch(`https://wai-mai-nong-new.vercel.app:443/api/v1/bookings`, {
        method : 'GET',
        headers : {
            authorization : `Bearer ${token}`
        }
    })
    if(!res.ok) throw new Error('Cannot Find Booking')
    return await res.json();
}