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
        <div className="text-black absolute w-[50vw] h-[30vh] bg-white top-[50vh] left-[50%] translate-x-[-50%] rounted-lg bg-amber-100 text-amber-800	">

                {
                    bookingData ?
                    <div className='w-full h-full relative font-serif'>
                            <div>
                                <div className='text-xl text-center mt-2'>
                                    {`Appointment`}
                                </div>
                                <div className='mx-2 top-[20%] absolute'>
                                    <div >
                                        {`Dentist : ${bookingData.dentist.name}`}
                                    </div>
                                    <div>
                                        {
                                            (isEdit == false) ?
                                        <div>{`Appointment Date : ${date}`}</div>
                                        :
                                        <div>{`Appointment Date :`}
                                            <input ref={newAppointmentRef} defaultValue={date} type="date" />
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
                                <div className='z-20 w-[20%] h-[15%] text-white absolute right-2 top-1'>
                                    {
                                        (isEdit == false)?
                                        <button onClick={handleDelete} className='z-20 absolute bg-rose-600 w-full h-full'>Delete</button>
                                        :
                                        <button onClick={handleEditBooking} className='z-20 absolute bg-lime-600 w-full h-full'>Confirm</button>
                                    }
                                </div>
                                <div className='z-20 w-[20%] h-[15%] text-white absolute left-2 top-1'>
                                    <button onClick={() => {setIsEdit(!isEdit)}} className='z-20 absolute bg-lime-600 w-full h-full'>{`${(isEdit == true) ? 'Cancel' : 'Edit'}`}</button>
                                </div>
                                <div className='right-[1%] absolute bottom-[2%]'>
                                    {`Last Update : ${upateDate ?? 'Cannot Find Last Update'}`}
                                </div>
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