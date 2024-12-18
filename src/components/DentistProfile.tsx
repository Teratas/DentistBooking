'use client'
import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/redux/store";
import Popup from "./Popup";
import { useRef } from "react";
import { useRouter } from "next/navigation";
export interface dentistProfileType {
    name : string,
    hospital : string,
    address : string,
    expertist : string,
    tel : string,
    picture : string,
    id? : string,
}
import { removeDentistAttackBooking } from "@/redux/features/slice";
import createNewBookingDid from "@/libs/createNewBookingDid";
import { changedentistData ,removeDentist, addBooking} from "@/redux/features/slice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import deleteDentistProfile from "@/libs/deleteDentistProfile";
import { dataType } from "@/libs/updateDentistProfile";
import getDentistProfile from "@/libs/getDentistProfile";
import { bookingType } from "./MyBooking";
import dentist from "@/db/models/dentist";
import { useState } from "react";
export default function DentistProfile({did, dentist} : {did : string, dentist:dataType}){
    // const allDentistArray : dataType[]= useAppSelector(state => state.slice.allDentist)
    // const dentistData= allDentistArray.filter((data) => data.id === did)
    // const dentist = dentistData[0];
    document.title = 'Dentist Profile'
    
    console.log(dentist)
    const dispatch = useDispatch<AppDispatch>()
    const token = sessionStorage.getItem('token')
    const picture = dentist.picture
    const router = useRouter()
    const deleteDentist = async () => {
        const res = await deleteDentistProfile(did,(token == null) ? '' : token)
        if(res.success){
            dispatch(removeDentist(did));
            dispatch(removeDentistAttackBooking(did));
            alert('Delete Success')
        }
        else{ 
            alert('Failed to Deleted')
            return;
        }
        // location.href = "http://localhost:3000/dentistPage";
        router.push('/dentistPage')
        
    }
    const bookingDate = useRef<HTMLInputElement>(null)
    const allBooking = useAppSelector(state => state.slice.allBooking)
    const user_id = sessionStorage.getItem('userId')
    const myBooking = allBooking.filter((data) => data.user == user_id)
    const isBook = (myBooking.length == 0) ? false : true;
    const defaultDate = (myBooking.length == 0) ? new Date().toISOString().substring(0,10) : myBooking[0].bookingDate.substring(0,10)
    
    const handleCreateBooking = async () => {
        // alert(myBooking[0].bookingDate)

        if(isBook){
            alert('Already Have Booking')
            return;
        }
        const res = await createNewBookingDid(did, token ?? '', bookingDate.current?.value ?? defaultDate)
        let newRes : bookingType = res.data;

        newRes.dentist = dentist
        if(res.success){
            dispatch(addBooking(newRes))
            alert('Create Booking Success')

            // location.href = 'http://localhost:3000/myBooking'
        }
        else {
            alert('Failed to create Booking')
        }
    }
    const role = sessionStorage.getItem('role')
    
    return (
        <div className='font-serif left-[50%] absolute w-[80vw] rounded-3xl h-[80vh] bg-stone-200'>
                <div className='top-0 absolute w-full h-[20%] bg-gradient-to-r from-teal-300 to-stone-100 rounded-lg'>
                    <div className='top-[40%] left-[45%] absolute'>
                        <div className='flex flex-row'>
                            <div className='text-4xl font-bold'>{`${dentist.name ?? 'No Data'}`}</div>
                            
                        </div>
                    </div>
                    <div className='top-[70%] left-[45%] text-2xl absolute'>
                        <div className='flex flex-row'>
                            <div>
                                {`${dentist.expertist ?? 'No Data'}`}
                            </div>
                
                            </div>
                        </div>
                
                    {
                        (role == 'admin') ?
                        <div className='w-[20%] h-[30%] absolute right-5 top-5'>
                            <button data-test="delete-dentist-button" onClick={(e) => {e.preventDefault();
                                    deleteDentist()}} className='w-full h-full bg-rose-600 rounded-xl text-white hover:bg-rose-500'>Delete</button>
                        </div>
                        :
                        ''
                    }
                
                </div>
                <div className='z-10 w-[30%] h-[40%] absolute rounded-xl left-[10%] top-[13%]'>
                    <Image className='w-full h-full rounded-2xl aspect-square object-cover absolute' src={picture} alt='' fill={true}/>
                </div>
                <div className='absolute w-full h-[80%] z-0 bg-white top-[20%] rounded-lg'>
                    <div className='absolute top-[5%] left-[45%] w-[50%]  z-10'>
                        <div className='text-pretty flex flex-col space-y-2 w-full text-xl'>
                            <div>
                                {`Hospital: ${dentist.hospital ?? 'No Data'}`}
                            </div>
                            <div>
                                {`Tel: ${dentist.tel ?? 'No Data'}`}
                            </div>
                            <div>
                                {`Address: ${dentist.address ?? 'No Data'}`}
                            </div>
                            <input ref={bookingDate} defaultValue={defaultDate} type="date" />
                        </div>
                
                    </div>
                    <div className='absolute w-[80%] h-[30%] bg-slate-200 rounded-lg top-[50%] left-[50%] translate-x-[-50%]'>
                        <div className='absolute top-[-20%] text-2xl'>About the dentist</div>
                        <div className='text-lg px-2 py-2'>
                            {
                                `Dr. ${dentist.name ?? 'No Data'}: With over 3 years of experience, Dr. ${dentist.name ?? ''} specializes in ${dentist.expertist ?? ''}. Known for Skill, Dr. ${dentist.name ?? ''} is committed to delivering personalized care to every patient.`
                            }
                        </div>
                
                    </div>
                    <div className='w-[80%] bottom-[5%] left-[50%] translate-x-[-50%] absolute h-[10%] '>
                        <button onClick={handleCreateBooking} className='w-full h-full bg-teal-500 rounded-lg hover:bg-teal-400 hover:shadow-lg text-white'>Make Appointment</button>
                    </div>
                </div>

        </div>
    );
}

{/* <div className=''>
                        <button onClick={handleCreateBooking}>Make Booking</button>
                    </div> */}
                    {/* {
                        (role == 'admin') ?
                        <div className='flex flex-row absolute right-0 bottom-0 px-2 z-30'>
                            <Link href={`/editDentistForm/${did}`}>Edit</Link>
                            <button className='px-5 bg-black text-white' onClick={(e) => {e.preventDefault(); 
                                deleteDentist()}}>Delete</button>
                        </div>
                        :''
                    } */}