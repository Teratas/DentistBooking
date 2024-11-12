'use client'
import { dbConnect } from "@/db/dbConnect";
import dentist from "@/db/models/dentist";
import { current } from "@reduxjs/toolkit";
import { revalidateTag } from "next/cache";
import { useRef } from "react";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
// import createNewDentist from "@/libs/createNewDentist";
import createNewDentist from "@/libs/createNewDentist";
import { dataType } from "@/libs/updateDentistProfile";
import { addDentist } from "@/redux/features/slice";
export default function AddDentistForm() {
    
    
    const name = useRef<HTMLInputElement>(null)
    const hospital =useRef<HTMLInputElement>(null)

    const address = useRef<HTMLInputElement>(null)

    const expertist = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()
    const tel = useRef<HTMLInputElement>(null)
    const picture = useRef<HTMLInputElement>(null)
    const token = sessionStorage.getItem('token');
    const imageRef = useRef<HTMLImageElement>()
   

    const handleSubmit = async () => {
        const nameData = name?.current?.value
        const hospitalData = hospital?.current?.value
        const addressData = address?.current?.value
        const expertistData = expertist?.current?.value
        const telData = tel?.current?.value
        const pictureData = picture?.current?.value
        if(nameData == null|| hospitalData == null|| addressData == null|| expertistData == null||telData == null|| pictureData == null) {
            alert('Please Correct your Information')
            return;
        }
        const newData : dataType = {

            name : (nameData == undefined) ? '' : nameData,
            hospital : (hospitalData == undefined) ? '' : hospitalData,
            address : (addressData == undefined) ? '' : addressData,
            expertist : (expertistData == undefined) ? '' : expertistData,
            tel : (telData == undefined) ? '' : telData,
            picture : (pictureData == undefined) ? '' : pictureData,
            
        }
        
        const res = await createNewDentist((token == null) ? '' : token, newData)
        console.log(res.data)
        console.log(res)
        if(res.success) {
            dispatch(addDentist(res.data))
            alert('Create New Dentist Successful')
        }
        else {
            alert('Sorry Failed to add Dentist')
            return;
        }
        console.log(res)
        console.log(newData)
        location.href = "http://localhost:3000/dentistPage";
    }
    return (
        <div className='absolute w-[100vw] h-[100vh]'>
            <div className='w-full h-full relative mt-[60px]'>
                <div className=' absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] bg-slate-300 w-[50vw] h-[50vh]'>
                    <div className='flex flex-col absolute w-[80%] h-[5%]'>
                        <TextField data-test="dentist-name" inputRef={name} id="standard-basic" label="Name" variant="standard" />
                        <TextField data-test="dentist-hospital" inputRef={hospital} id="standard-basic" label="Hospital" variant="standard" />
                        <TextField data-test="dentist-address" inputRef={address} id="standard-basic" label="Address" variant="standard" />
                        <TextField data-test="dentist-tel" inputRef={expertist} id="standard-basic" label="Expertist" variant="standard" />
                        <TextField data-test="dentist-picture" inputRef={tel} id="standard-basic" label="Tel" variant="standard" />
                        <input type="file" accept="image/png, image/jpeg" />
                        {/* <TextField data-test="dentist-picture" inputRef={picture} id="standard-basic" label="Picture" variant="standard" /> */}
                        {/* <input data-test="dentist-name" ref={name} type="text" name="name" placeholder="Dentist's Name" required />
                        <input data-test="dentist-hospital" ref={hospital} type="text" name="hospital" placeholder="Hospital" required />
                        <input data-test="dentist-address" ref={address} type="text" name="address" placeholder="Address" required />
                        <input data-test="dentist-expertist" ref={expertist} type="text" name="expertist" placeholder="Expertise" required />
                        <input data-test="dentist-tel" ref={tel} type="tel" name="tel" placeholder="Phone Number" required />
                        <input data-test="dentist-picture" ref={picture} type="text" name="picture" placeholder="Picture URL" required /> */}
                    </div>
                    <div className='w-[50%] h-[5%] bg-black absolute bottom-[5%] left-[50%] translate-x-[-50%] rounded-lg text-center text-white'>
                        <button data-test="add-dentist-button"type="submit" onClick={handleSubmit}>Add Dentist</button>
                    </div>
                </div>
            </div>
        </div>
    );
}