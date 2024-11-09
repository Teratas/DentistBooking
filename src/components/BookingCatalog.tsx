'use client'
import BookingItem from "./BookingItem";
import { useAppSelector } from "@/redux/store";

export default function BookingCatalog(){
    const bookingArray = useAppSelector(state => state.slice.allBooking)
    
    return (
        <div className=' w-[75vw] flex flex-row flex-wrap'>
            {
                bookingArray.map(data => 
                        <div className='px-2 py-2'>
                            <BookingItem bookingData={data}/>
                        </div>
                    )
            }
        </div>
    );
}