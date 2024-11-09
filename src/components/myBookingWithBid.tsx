'use client'
import Link from "next/link";
import { useSelector } from "react-redux";
import getAllBooking from "@/libs/getAllBooking";
import { useAppSelector } from "@/redux/store";
import { dataType } from "@/libs/updateDentistProfile";
import MyBookingItem from "./MyBookingItem";
import deleteBookingById from "@/libs/deleteBookingById";
import changeBookingById from "@/libs/changeBookingById";
import { bookingType } from "./MyBooking";

export default function MyBookingWithBid({bid} : {bid : string}) {
    // const bookingData = await getAllBooking(token || '');
    // const bookingArray: Array<bookingType> = bookingData.data;
    const bookingArray : bookingType[] = useAppSelector((state) => state.slice.allBooking)
    // console.log(bookingArray);
    const dentistArray : dataType[] = useAppSelector(state => state.slice.allDentist)
    const userId = bid
    const userBookings : bookingType[] = bookingArray
        .filter((data) => data.user === userId)



    const bookingData : bookingType = userBookings[0]
    // const dentistData : dataType = bookingData.dentist
    // const handleDelete = async () => {
    //     const res = await deleteBookingById()
    // }
    return (
        <div className="text-black w-[50vw] h-[20vh] top-[40vh] absolute">
            {
                bookingData ? 
                <Link href={`/myBooking/${bookingData._id}`}>
                <div>{bookingData.user ?? 'no data'}</div>
                <div>{bookingData.dentist.name ?? 'cannot find dentist'}</div>
                <div></div>

            </Link>
            :
            <div>
                No Booking Right Now
            </div>
            }
        </div>
    );
}