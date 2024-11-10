'use client'
import BookingItem from "./BookingItem";
import { useAppSelector } from "@/redux/store";

export default function BookingCatalog(){
    const bookingArray = useAppSelector(state => state.slice.allBooking)
    
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