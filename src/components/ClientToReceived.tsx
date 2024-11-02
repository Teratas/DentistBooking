'use client'
import { setMyBooking } from "@/redux/features/slice";
import MyBooking from "./MyBooking";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
export default function ClientToReceived() {
    const booking = useAppSelector(state => state.slice.myBooking)
    console.log(booking)
    return (
        <div>
            {/* < MyBooking token={(token == null) ? '' : token} userId={(userId == null) ? '' : userId}/> */}

        </div>
    );
}