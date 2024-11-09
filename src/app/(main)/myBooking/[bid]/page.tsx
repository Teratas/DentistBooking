import deleteBookingById from "@/libs/deleteBookingById";
import BookingCard from "@/components/BookingCard";
export default function BookingDatailPage({params} : {params : {bid : string}}){
    
    return (
        <main className='text-black '>
            <div >
                {params.bid}
            </div>
            <BookingCard bid={params.bid}/>
        </main>
    );
}