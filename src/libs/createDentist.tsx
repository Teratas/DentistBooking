export default async function createDentist({id, token, bookingDate} : {id : string, token : string, bookingDate : string}) {
    // const bookingDate = new Date()
    // const createAt
    const res = await fetch(`https://wai-mai-nong-new.vercel.app:443/api/v1/dentists/${id}`, {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            authorization : `Bearer ${token}`
        },
        body : JSON.stringify({
            bookingDate : bookingDate,
            // createAt : new Date()
        })
    })
    return res.ok
}