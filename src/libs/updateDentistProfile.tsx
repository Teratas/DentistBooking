export interface dataType {
    name: string;
    hospital: string;
    address: string;
    expertist: string;
    tel: string;
    picture: string;
    id?: string;
    _id? : string
}

export default async function updateDentistProfile(
    id: string,
    data: dataType,
    token: string
): Promise<any> {
    const res = await fetch(`https://wai-mai-nong-new.vercel.app/api/v1/dentists/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data),
    });

    console.log(data);

    if (!res.ok) {
        const errorMessage = await res.text();
        throw new Error(`Failed: ${res.status} ${errorMessage}`);
    }

    return await res.json();
}