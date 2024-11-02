// 'use client'
import { useRef } from "react";
import MyBooking from "@/components/MyBooking";
import { useAppSelector } from "@/redux/store";
import ClientToReceived from "@/components/ClientToReceived";
// import MyBooking from "@/components/myBooking";
export default function BookingPage() {
    // const userIdRef = useRef(sessionStorage.getItem('userId'));
    // const tokenRef = useRef(sessionStorage.getItem('token'))
    // const token = tokenRef.current
    // const userId = userIdRef.current
    

    return (
        <main className='text-black mt-[50px]'>
            {/* <div>test</div> */}
           < MyBooking/>
           {/* <ClientToReceived /> */}
        </main>
    );
}