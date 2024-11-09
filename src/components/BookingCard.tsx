'use client'
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
import { removeBooking } from "@/redux/features/slice";
import deleteBookingById from "@/libs/deleteBookingById";
export default function BookingCard({bid} : {bid : string}) {
    const token = sessionStorage.getItem('token');
    const dispatch = useDispatch<AppDispatch>()
    const handleDelete = async () => {
        const res = await deleteBookingById(bid, token ?? '');
        console.log(res)
        if(res.success) {
            dispatch(removeBooking(bid))
            alert('Delete booking Success!');
            location.href = 'http://localhost:3000/myBooking/'

        }
        else{
            alert('Failed to Delete This Booking')
        }
    }
    return (
        <div>
            <div className='absolute right-10 bottom-20'>
                    <Link className='bg-gray-200' href={`/myBooking/editMyBooking/${bid}`}>Edit My Booking</Link>
                    <button onClick={handleDelete} className='px-2 bg-red-200'>Delete My Booking</button>
            </div>
        </div>
    );
}