'use client'
import BookingItem from "./BookingItem";
import { useAppSelector } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { setMyBooking } from "@/redux/features/slice";
import getAllBooking from "@/libs/getAllBooking";
export default function BookingCatalog(){
    const bookingArray = useAppSelector(state => state.slice.allBooking)
    const dispatch = useDispatch<AppDispatch>()
    const token = sessionStorage.getItem('token')
    useEffect(() => {
        if(!token){
            alert('token missing')
            return;
        }
        const getData = async () => {
            if(sessionStorage.getItem('setupBooking') == '0'){
                
                const res = await getAllBooking(token)
                if(res.success){
                    // alert('Success')
                    dispatch(setMyBooking(res.data))
                }
                else{
                    alert('failed')
                }
                sessionStorage.setItem('setupBooking', '1')
            }
        }
        getData()
    })
    return (
        <div className='relavitve w-[100vw] h-full'>
            <div className='absolute w-[95vw] h-full left-[3vw]'>
                <div className='flex flex-row flex-wrap '>
                    {
                    bookingArray.map(data => 
                            <div className='p-2'>
                                <BookingItem bookingData={data}/>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
        
    );
}