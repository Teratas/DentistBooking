'use client'
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { useState } from "react";
import { editDentistAttackBooking } from "@/redux/features/slice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import updateDentistProfile from "@/libs/updateDentistProfile";
import { dataType } from "@/libs/updateDentistProfile";
import { changedentistData } from "@/redux/features/slice";
export default function EditDentistForm({ did, dentist }: { did: string, dentist : dataType }) {
    const name = useRef<HTMLInputElement>(null);
    const hospital = useRef<HTMLInputElement>(null);
    const address = useRef<HTMLInputElement>(null);
    const expertist = useRef<HTMLInputElement>(null);
    const tel = useRef<HTMLInputElement>(null);
    const picture = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch<AppDispatch>();
    const token = sessionStorage.getItem('token');
    // const currentState=  useAppSelector(state => state.slice.allDentist)
    // let index = currentState.findIndex((data) => data.id == did)

    const handleEdit = async () => {
        const nameData = name?.current?.value;
        const hospitalData = hospital?.current?.value; 
        const addressData = address?.current?.value;
        const expertistData = expertist?.current?.value;
        const telData = tel?.current?.value;
        const pictureData = picture?.current?.value;

        if (!nameData || !hospitalData || !addressData || !expertistData || !telData || !pictureData) {
            alert('Please correct your information.');
            return;
        }

        if (!token) {
            alert('Token error');
            return;
        }
        const newData: dataType = {
            name: nameData,
            hospital: hospitalData,
            address: addressData,
            expertist: expertistData,
            tel: telData,
            picture: pictureData,

        };
        const sendData: dataType = {
            name: nameData,
            hospital: hospitalData,
            address: addressData,
            expertist: expertistData,
            tel: telData,
            picture: pictureData,
            id: did
        };

        const res = await updateDentistProfile(did, newData, token);
            
        if (res.success) {
            // currentState[index] = sendData            
            dispatch(changedentistData({data : sendData, id : did}));
            dispatch(editDentistAttackBooking(sendData));
            alert('Edit successful');

            // window.location.href = "/dentistPage";
        } else {
            alert('Failed to edit. Please check your form.');
        }
        
    };

    return (
        <div className='text-black'>
            <div className='font-serif relative m-auto w-[80vw] rounded-3xl h-[80vh] bg-slate-200'>
            <div className='top-0 absolute w-full h-[20%] bg-gradient-to-r from-cyan-300 to-slate-100'>
                <div className='top-[58%] left-[45%] absolute'>
                    <div className='flex flex-row'>
                        <div className='text-xl font-bold'>                <input defaultValue={dentist.name} ref={name} type="text" name="name" placeholder="Dentist's Name" required /></div>

                    </div>
                </div>
                <div className='top-[80%] left-[45%] text-lg absolute'>
                    <div className='flex flex-ro'>
                        <div className=''>
                            <input defaultValue={dentist.expertist} ref={expertist} type="text" name="expertist" placeholder="Expertise" required />

                        </div>
                        
                        </div>
                    </div>
                    
  
                
            </div>

            <div className='z-10 w-[30%] h-[40%] absolute rounded-xl bg-black left-[10%] top-[13%]'></div>
            <div className='absolute w-full h-[80%] z-0 bg-white top-[20%] '>
                <div className='absolute top-[5%] left-[45%] w-[50%]  z-10'>
                    <div className='text-pretty flex flex-col space-y-2 w-full'>
                        <div>
                            {`Hospital: `}
                            <input defaultValue={dentist.hospital} ref={hospital} type="text" name="hospital" placeholder="Hospital" required />

                        </div>
                        <div>
                            {`Tel: `}
                            <input defaultValue={dentist.tel} ref={tel} type="tel" name="tel" placeholder="Phone Number" required />

                        </div>
                        <div>
                            {`Address: `}
                            <input defaultValue={dentist.address} ref={address} type="text" name="address" placeholder="Address" required />

                        </div>
                        <div>
                            {`Change Picture Url: `}
                            <input defaultValue={dentist.picture} ref={picture} type="text" name="picture" placeholder="Picture URL" required />

                        </div>
                        
                    </div>
                    
                </div>

                <div className='absolute w-[80%] h-[30%] bg-slate-200 rounded-lg top-[50%] left-[50%] translate-x-[-50%]'>
                    <div className='absolute top-[-16%] text-lg'>About</div>
                    <div className='text-sm px-2 py-2'>
                        {
                            `Dr. ${dentist.name}: With over 3 years of experience, Dr. ${dentist.name} specializes in ${dentist.expertist}. Known for Skill, Dr. ${dentist.name} is committed to delivering personalized care to every patient.`
                        }
                    </div>
                    
                </div>


                </div>
                <div className='w-[80%] bottom-[4%] left-[50%] translate-x-[-50%] absolute h-[8%] '>
                    <button onClick={handleEdit} className='w-full h-full bg-lime-500 rounded-lg'>Edit Dentist</button>
                </div>
            </div>
            
        
            {/* <div>
                <input defaultValue={dentist.name} ref={name} type="text" name="name" placeholder="Dentist's Name" required />
                <input defaultValue={dentist.hospital} ref={hospital} type="text" name="hospital" placeholder="Hospital" required />
                <input defaultValue={dentist.address} ref={address} type="text" name="address" placeholder="Address" required />
                <input defaultValue={dentist.expertist} ref={expertist} type="text" name="expertist" placeholder="Expertise" required />
                <input defaultValue={dentist.tel} ref={tel} type="tel" name="tel" placeholder="Phone Number" required />
                <input defaultValue={dentist.picture} ref={picture} type="text" name="picture" placeholder="Picture URL" required />
                <button type="submit" onClick={handleEdit}>Edit Dentist</button>
            </div> */}
            
        </div>
    );
}