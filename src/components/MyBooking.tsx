'use client'
import { useRef, useState } from "react";
import Link from "next/link";
import { changeBooking } from "@/redux/features/slice";
import { useSelector } from "react-redux";
import getAllBooking from "@/libs/getAllBooking";
import { useAppSelector } from "@/redux/store";
import { dataType } from "@/libs/updateDentistProfile";
import MyBookingItem from "./MyBookingItem";
import deleteBookingById from "@/libs/deleteBookingById";
import changeBookingById from "@/libs/changeBookingById";
export interface bookingType {
    bookingDate: string;
    createdAt: string;
    user: string;
    dentist: dataType;
    _id? : string
}
import { removeBooking } from "@/redux/features/slice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
export default function MyBooking() {
    // const bookingData = await getAllBooking(token || '');
    // const bookingArray: Array<bookingType> = bookingData.data;
    const bookingArray : bookingType[] = useAppSelector((state) => state.slice.allBooking)
    // console.log(bookingArray);
    const userName = sessionStorage.getItem('name')
    const dentistArray : dataType[] = useAppSelector(state => state.slice.allDentist)
    const userId = sessionStorage.getItem('userId')
    const userBookings : bookingType[] = bookingArray
        .filter((data) => data.user === userId)

    const [isEdit, setIsEdit] = useState(false)
    const newAppointmentRef = useRef<HTMLInputElement>(null)
    const bookingData : bookingType = userBookings[0]
    // const dentistData : dataType = bookingData.dentist
    // const handleDelete = async () => {
    //     const res = await deleteBookingById()
    // }
    const handleEditBooking = async () => {
        if(userId == null){
            alert('Cannot Find UserID')
            return;
        }
        const bookingDate = newAppointmentRef.current?.value

        if(token == null || bookingDate == undefined || !bookingData._id){
            alert('Failed to Edit This Booking')
            return;
        }
        alert(bookingDate)
        const res = await changeBookingById(bookingData._id, token, bookingDate)
        console.log(res)
        // const bookingData= res.data
        if(res.success){
            dispatch(changeBooking({bookingDate, userId}))
            alert('Edit Booking Success')
        }
        else{
            alert('Failed to edit this booking')
        }
    }
    const token = sessionStorage.getItem('token');
    const dispatch = useDispatch<AppDispatch>()
    const handleDelete = async () => {
        if(!bookingData._id){
            alert('Booking Data not found')
            return;
        }
        const res = await deleteBookingById(bookingData._id, token ?? '');
        console.log(res)
        if(res.success) {
            dispatch(removeBooking(bookingData._id))
            alert('Delete booking Success!');
            // location.href = 'http://localhost:3000/myBooking/'

        }
        else{
            alert('Failed to Delete This Booking')
        }
    }
    const upateDate = (bookingData == undefined) ? '' : new Date(bookingData.createdAt).toDateString()
    console.log(bookingArray)
    console.log(bookingData)
    const date = (bookingData ==undefined) ? '' : (new Date(bookingData.bookingDate).toISOString()).substring(0,10)
    return (
        <div className="sm:text-md md:text-xl lg:text-2xl absolute w-[50vw] h-[35vh] bg-white text-black top-[55vh] left-[50%] translate-x-[-50%] rounded-2xl hover:shadow-lg">

                {
                    bookingData ?
                    <div className='w-full h-full relative font-serif'>
                            <div>
                                <div className='sm:text-2xl md:text-3xl lg:text-4xl text-center mt-2 p-3'>
                                    {`Appointment`}
                                </div>
                                <div className='mx-2 top-[20%] absolute text-lg p-5 pl-8'>
                                    <div >
                                        {`Dentist : ${bookingData.dentist.name}`}
                                    </div>
                                    <div>
                                        {
                                            (isEdit == false) ?
                                        <div>{`Appointment Date : ${date}`}</div>
                                        :
                                        <div>{`Appointment Date :`}
                                            <input className='inline' ref={newAppointmentRef} defaultValue={date} type="date" />
                                        </div>
                                        }
                                        
                                    </div>
                                    <div>
                                        {`Tel : ${bookingData.dentist.tel}`}
                                    </div>
                                    <div>
                                        {`Address : ${bookingData.dentist.address}`}
                                    </div>
                                </div>
                                <div className='z-20 w-[20%] h-[15%] text-white sm:text-md md:text-xl lg:text-2xl absolute right-2 top-1 rounded-lg mr-1'>
                                    {
                                        (isEdit == false)?
                                        <button onClick={handleDelete} name = "delete"className='z-20 absolute bg-slate-400 hover:bg-rose-500 w-full h-full rounded-xl'>Delete</button>
                                        :
                                        <button onClick={handleEditBooking} name = "confirm" className='z-20 absolute bg-teal-500 hover:bg-teal-400 w-full h-full rounded-xl'>Confirm</button>
                                    }
                                </div>
                                <div className='z-20 w-[20%] h-[15%] text-white sm:text-md md:text-xl lg:text-2xl absolute left-2 top-1 ml-1'>
                                    <button name ='caned'onClick={() => {setIsEdit(!isEdit)}} className={`rounded-xl z-20 absolute ${(isEdit == true) ? 'bg-slate-400 hover:bg-rose-500':'bg-teal-500 hover:bg-teal-400'
                                    } w-full h-full`}>{`${(isEdit == true) ? 'Cancel' : 'Edit'}`}</button>
                                </div>
                                <div className='right-[1%] absolute bottom-[1%] p-8 text-lg'>
                                    {`Last Update : ${upateDate ?? 'Cannot Find Last Update'}`}
                                </div>
                            </div>
                            
                    </div>
                :
                <div className='w-full h-full relative font-serif text-2xl text-center p-10 flex flex-col text-middle'>
                    You currently have no bookings.
                    <Link className="underline decoration-2 hover:text-stone-800"href={'/dentistPage'}>Schedule Your Appointment Now.</Link>
                </div>
                }

        </div>
    );
}