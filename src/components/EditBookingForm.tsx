'use client'
import { useRef } from "react";
import { changeBooking } from "@/redux/features/slice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import changeBookingById from "@/libs/changeBookingById";

export default function EditBookingForm({bid} : {bid : string}){
    const date = useRef<HTMLInputElement>(null);
    const token = sessionStorage.getItem('token')
    const userId = sessionStorage.getItem('userId')
    const dispatch = useDispatch<AppDispatch>();
    
    const handleEditBooking = async () => {
        if(userId == null){
            alert('Cannot Find UserID')
            return;
        }
        const bookingDate = date.current?.value

        if(token == null || bookingDate == undefined){
            alert('Failed to Edit This Booking')
            return;
        }
        alert(bookingDate)
        const res = await changeBookingById(bid, token, bookingDate)
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
    return (
        <div className='text-black'>
            {bid}
            <input ref={date} type="text" />
            <button onClick={handleEditBooking}>Edit My Booking</button>        
        </div>
    );
}