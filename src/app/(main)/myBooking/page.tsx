// 'use client'
import { useRef } from "react";
import BookingCatalog from "@/components/BookingCatalog";
import MyBooking from "@/components/MyBooking";
import { useAppSelector } from "@/redux/store";
// import ClientToReceived from "@/components/ClientToReceived";
// import MyBooking from "@/components/myBooking";
export default function BookingPage() {
    

    return (
        <main className='text-black '>
            <div className='z-0 absolute bg-gradient-to-r from-white to-cyan-200 w-[100vw] h-[100vh]'></div>

            <div className='z-20 mt-[60px] absolute'>
                <BookingCatalog />
            </div>
        </main>
    );
}