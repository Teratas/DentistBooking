'use client'
import Link from "next/link";
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

export default function BookingItem({bookingData}:{bookingData : bookingType}) {
    const bookingArray : bookingType[] = useAppSelector((state) => state.slice.allBooking)
    
    const upateDate = new Date(bookingData.createdAt).toDateString()
    const date = new Date(bookingData.bookingDate).toDateString();
    return (
        <div className="text-black w-[35vw] h-[20vh] z-30  rounted-lg bg-amber-100 text-amber-800	">

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
                                        {`User : ${bookingData.user}`}
                                    </div>
                                    <div>
                                        {`Date: ${date}`}
                                    </div>
                                </div>
                                <div className='right-[1%] absolute bottom-[2%]'>
                                    {`Last Update : ${upateDate ?? 'Cannot Find Last Update'}`}
                                </div>
                            </div>
                            <div className='z-20 w-[20%] h-[15%] text-white absolute right-2 top-2'>
                                <button className='z-20 absolute bg-rose-600 w-full h-full'>Delete</button>
                            </div>
                            <div className='z-20 w-[20%] h-[15%] text-white absolute left-2 top-2'>
                                <button className='z-20 absolute bg-lime-600 w-full h-full'>Edit</button>
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