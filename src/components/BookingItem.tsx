'use client'
import Link from "next/link";
import { useSelector } from "react-redux";
import getAllBooking from "@/libs/getAllBooking";
import { useAppSelector } from "@/redux/store";
import { dataType } from "@/libs/updateDentistProfile";
import MyBookingItem from "./MyBookingItem";
import { useRef } from "react";
import deleteBookingById from "@/libs/deleteBookingById";
import changeBookingById from "@/libs/changeBookingById";
export interface bookingType {
    bookingDate: string;
    createdAt: string;
    user: string;
    dentist: dataType;
    _id? : string
}
import { useState } from "react";
import { removeBooking } from "@/redux/features/slice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { changeBooking } from "@/redux/features/slice";
export default function BookingItem({bookingData}:{bookingData : bookingType}) {
    const bookingArray : bookingType[] = useAppSelector((state) => state.slice.allBooking)
    const newAppointmentRef = useRef<HTMLInputElement>(null);
    const upateDate = new Date(bookingData.createdAt).toISOString().substring(0,10)
    const date = (new Date(bookingData.bookingDate).toISOString()).substring(0,10);
    const userId = bookingData.user
    const [isEdit, setIsEdit] = useState(false)

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
    return (
        <div className="text-black w-[30vw] h-[25vh] z-30 rounded-lg bg-white text-balck rounded-xl p-[1%] hover:shadow-lg">

                {
                    bookingData ?
                    <div className='w-full h-full relative font-serif'>
                            <div>
                                <div className='text-2xl text-center mt-2'>
                                    {`Appointment`}
                                </div>
                                <div className='mx-2 top-[20%] absolute p-[3%]'>
                                    <div >
                                        {`Dentist : ${bookingData.dentist.name}`}
                                    </div>
                                    <div>
                                        {`User : ${bookingData.user}`}
                                    </div>
                                    <div>
                                        {
                                            (isEdit == false) ?
                                        <div>{`Date : ${date}`}</div>
                                        :
                                        <div>{`Date :`}
                                            <input ref={newAppointmentRef} defaultValue={date} type="date" />
                                        </div>
                                        }
                                        
                                    </div>
                                </div>
                                <div className='right-[2%] absolute bottom-[8%]'>
                                    {`Last Update : ${upateDate ?? 'Cannot Find Last Update'}`}
                                </div>
                            </div>
                            <div className='z-20 w-[20%] h-[15%] text-white absolute right-2 top-1'>
                                    {
                                        (isEdit == false)?
                                        <button onClick={handleDelete} className='z-20 absolute bg-slate-400 hover:bg-rose-500 w-full h-full rounded-lg'>Delete</button>
                                        :
                                        <button onClick={handleEditBooking} className='z-20 absolute bg-teal-500 hover:bg-teal-400 w-full h-full rounded-lg'>Confirm</button>
                                    }
                            </div>
                            <div className='z-20 w-[20%] h-[15%] text-white absolute left-2 top-1'>
                                    <button onClick={() => {setIsEdit(!isEdit)}} className={`rounded-lg z-20 absolute ${(isEdit == true) ? 'bg-slate-400 hover:bg-rose-500':'bg-teal-500 hover:bg-teal-400'
                                    } w-full h-full`}>{`${(isEdit == true) ? 'Cancel' : 'Edit'}`}</button>
                            </div>

                    </div>
                :
                <div>
                    No Booking Right Now
                </div>
                }

        </div>
    );
}