'use client'
import { dbConnect } from "@/db/dbConnect";
import dentist from "@/db/models/dentist";
import { current } from "@reduxjs/toolkit";
import { revalidateTag } from "next/cache";
import { useRef } from "react";
import { useDispatch } from "react-redux";
// import createNewDentist from "@/libs/createNewDentist";
import createNewDentist from "@/libs/createNewDentist";
import { dataType } from "@/libs/updateDentistProfile";
import { addDentist } from "@/redux/features/slice";
export default function AddDentistForm() {
    // const addDentist = async (formData : FormData) => {
    //     'use server';

    //     const name = formData.get('name');
    //     const hospital = formData.get('hospital');
    //     const address = formData.get('address');
    //     const expertist = formData.get('expertist');
    //     const tel = formData.get('tel');
    //     const picture = formData.get('picture');

    //     try {
    //         await dbConnect();
    //         await dentist.create({
    //             name,
    //             hospital,
    //             address,
    //             expertist,
    //             tel,
    //             picture
    //         });
    //         revalidateTag('dentistLib'); // Revalidate the cache
    //     } catch (error) {
    //         console.error("Error adding dentist:", error);
    //     }
    // };

    // const handleSubmit = async (event : any) => {
    //     event.preventDefault();
    //     const formData = new FormData(event.target);
    //     await addDentist(formData);
    // };
    const name = useRef<HTMLInputElement>(null)
    const hospital =useRef<HTMLInputElement>(null)

    const address = useRef<HTMLInputElement>(null)

    const expertist = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()
    const tel = useRef<HTMLInputElement>(null)
    const picture = useRef<HTMLInputElement>(null)
    const token = sessionStorage.getItem('token');

   

    const handleSubmit = async () => {
        // console.log((name.current ==null) ? '' : name.current.value)
        const nameData = name?.current?.value
        const hospitalData = hospital?.current?.value
        const addressData = address?.current?.value
        const expertistData = expertist?.current?.value
        const telData = tel?.current?.value
        const pictureData = picture?.current?.value
        const newData : dataType = {

            name : (nameData == undefined) ? '' : nameData,
            hospital : (hospitalData == undefined) ? '' : hospitalData,
            address : (addressData == undefined) ? '' : addressData,
            expertist : (expertistData == undefined) ? '' : expertistData,
            tel : (telData == undefined) ? '' : telData,
            picture : (pictureData == undefined) ? '' : pictureData,
            
        }
        const res = await createNewDentist((token == null) ? '' : token, newData)
        if(res) dispatch(addDentist(newData))
        else alert('Sorry Failed to add Dentist')
        console.log(res)
        console.log(newData)
    }
    return (
        <div>
                <input ref={name} type="text" name="name" placeholder="Dentist's Name" required />
                <input ref={hospital} type="text" name="hospital" placeholder="Hospital" required />
                <input ref={address} type="text" name="address" placeholder="Address" required />
                <input ref={expertist} type="text" name="expertist" placeholder="Expertise" required />
                <input ref={tel} type="tel" name="tel" placeholder="Phone Number" required />
                <input ref={picture} type="text" name="picture" placeholder="Picture URL" required />
                <button type="submit" onClick={handleSubmit}>Add Dentist</button>
        </div>
    );
}