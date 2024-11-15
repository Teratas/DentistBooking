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
        <div className='font-serif absolute w-[100vw] h-[100vh]'>
            <div className='w-full h-full relative'>
                <div className="text-2xl absolute top-[13%]  translate-x-[-50%] left-[50%]"> Add Dentist Form</div>
                <div className=' absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] bg-white w-[48vw] h-[63vh] py-2 rounded-xl'>
                    
                    <div className='flex top-[10%] flex-col absolute w-[80%] h-[10%]'>
                        <div className="translate-x-[10%] m-1 w-full h-full">
                            <div>Dentists Name</div>
                            <TextField data-test="dentist-name" inputRef={name} id="standard-basic" label="Name" variant="standard" className="w-full"/>
                            <div>Hospital</div>
                            <TextField data-test="dentist-hospital" inputRef={hospital} id="standard-basic" label="Hospital" variant="standard" className="w-full"/>
                            <div>Address</div>
                            <TextField data-test="dentist-address" inputRef={address} id="standard-basic" label="Address" variant="standard" className="w-full"/>
                            <div>Expertist</div>
                            <TextField data-test="dentist-expertist" inputRef={expertist} id="standard-basic" label="Expertist" variant="standard" className="w-full"/>
                            <div>Tel.</div>
                            <TextField data-test="dentist-tel" inputRef={tel} id="standard-basic" label="Tel" variant="standard" className="w-full"/>
                            <div>Picture URL</div>
                            <TextField data-test="dentist-picture" inputRef={picture} defaultValue={'https://drive.google.com/uc?export=view&id='} className="w-full" id="standard-basic" label="Picture" variant="standard" />
                        </div>
                        
                    </div>
                    <div className='w-[50%] h-[5%]  bg-black text-center align-bottom justify-center text-xl text-align absolute bottom-[4%] left-[50%] translate-x-[-50%] rounded-lg text-center text-white bg-teal-500 hover:bg-teal-400'>
                        <button data-test="add-dentist-button"type="submit" onClick={handleSubmit} >Add Dentist</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
