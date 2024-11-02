'use client'
import { useSelector } from "react-redux";
import getAllBooking from "@/libs/getAllBooking";
import { useAppSelector } from "@/redux/store";
import { dataType } from "@/libs/updateDentistProfile";
import MyBookingItem from "./MyBookingItem";
export interface bookingType {
    bookingDate: string;
    createAt: string;
    user: string;
    dentist: string;
}

export default function MyBooking() {
    // const bookingData = await getAllBooking(token || '');
    // const bookingArray: Array<bookingType> = bookingData.data;
    const bookingArray : bookingType[] = useAppSelector((state) => state.slice.myBooking)
    // console.log(bookingArray);
    const userId = sessionStorage.getItem('userId')
    const userBookings : bookingType[] = bookingArray
        .filter((data) => data.user === userId)


    console.log(userBookings);

    return (
        <div className="text-black">
            {/* <div className="text-black">{userBookings[0].user || 'No bookings available'}</div> */}
            {/* <MyBookingItem booking={userBookings[0]}/> */}
            <div>{(userBookings.length == 0) ? 'No Data' : userBookings[0].user}</div>
        </div>
    );
}