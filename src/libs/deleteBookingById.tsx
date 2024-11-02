export default async function deleteBookingById({id, token}:{id : string, token : string}) {
    const res = await fetch(`https://wai-mai-nong-new.vercel.app:443/api/v1/bookings/${id}`, {
        method : 'DELETE',
        headers : {
            authorization : `Bearer ${token}`
        },
    })
    if(!res.ok) throw new Error('Failed to Fetch Delete');
    return await res.json();
}