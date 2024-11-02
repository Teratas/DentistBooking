export default async function getDentistProfile(id : string) {
    const response = await fetch(`https://wai-mai-nong-new.vercel.app:443/api/v1/dentists/${id}`);
    if(!response.ok) throw new Error('Fetch Error');
    return await response.json();
}