'use client'
import Link from "next/link";
import { useAppSelector } from "@/redux/store";
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
export default function DentistProfile({did, dentist} : {did : string, dentist:dataType}){
    // const allDentistArray : dataType[]= useAppSelector(state => state.slice.allDentist)
    // const dentistData= allDentistArray.filter((data) => data.id === did)
    // const dentist = dentistData[0];
    console.log(dentist)
    const dispatch = useDispatch<AppDispatch>()
    const token = sessionStorage.getItem('token')

    const deleteDentist = async () => {
        const res = await deleteDentistProfile(did,(token == null) ? '' : token)
        dispatch(removeDentist(did));
        dispatch(removeDentistAttackBooking(did));
        alert(res)
        location.href = "http://localhost:3000/dentistPage";
    }
    console.log(did)
    console.log(token)
    const bookingDate = new Date('2003-10-12')
    const handleCreateBooking = async () => {
        const res = await createNewBookingDid(did, token ?? '', bookingDate.toISOString())
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
                        <div className='text-4xl font-bold'>{`${dentist.name}`}</div>
                        {/* {
                            (role == 'admin') ?
                        <div className='px-2 w-[50%] h-[20%]'>
                                <Link href={`/editDentistForm/${did}`} className=' rounded-lg'>
                                <div className='text-center bg-cyan-300 w-full h-full rounded-lg'>
                                Edit
                                </div>
                                </Link>
                        </div>
                        :''
                        } */}
                    </div>
                </div>
                <div className='top-[70%] left-[45%] text-2xl absolute'>
                    <div className='flex flex-row'>
                        <div>
                            {`${dentist.expertist}`}
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
            <div className='z-10 w-[30%] h-[40%] absolute rounded-xl bg-black left-[10%] top-[13%]'></div>
            <div className='absolute w-full h-[80%] z-0 bg-white top-[20%] rounded-lg'>
                <div className='absolute top-[5%] left-[45%] w-[50%]  z-10'>
                    <div className='text-pretty flex flex-col space-y-2 w-full text-xl'>
                        <div>
                            {`Hospital: ${dentist.hospital}`}
                        </div>
                        <div>
                            {`Tel: ${dentist.tel}`}
                        </div>
                        <div>
                            {`Address: ${dentist.address}`}
                        </div>
                        
                    </div>
                    
                </div>

                <div className='absolute w-[80%] h-[30%] bg-slate-200 rounded-lg top-[50%] left-[50%] translate-x-[-50%]'>
                    <div className='absolute top-[-20%] text-2xl'>About the dentist</div>
                    <div className='text-lg px-2 py-2'>
                        {
                            `Dr. ${dentist.name}: With over 3 years of experience, Dr. ${dentist.name} specializes in ${dentist.expertist}. Known for Skill, Dr. ${dentist.name} is committed to delivering personalized care to every patient.`
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