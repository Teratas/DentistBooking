'use client'
import { useRef, useState } from "react";
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
    const upateDate = (bookingData == undefined) ? '' : new Date(bookingData.createdAt).toDateString()
    console.log(bookingArray)
    console.log(bookingData)
    const date = (new Date(bookingData.bookingDate).toISOString()).substring(0,10)
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
                                    <button className='z-20 absolute bg-rose-600 w-full h-full'>Delete</button>
                                </div>
                                <div className='z-20 w-[20%] h-[15%] text-white absolute left-2 top-1'>
                                    <button onClick={() => {setIsEdit(!isEdit)}} className='z-20 absolute bg-lime-600 w-full h-full'>Edit</button>
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