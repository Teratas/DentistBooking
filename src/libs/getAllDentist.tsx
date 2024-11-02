export default async function getAllDentist(){
    const response = await fetch('https://wai-mai-nong-new.vercel.app:443/api/v1/dentists');
    if(!response.ok) throw new Error('Fetch Error');
    return await response.json();
} 