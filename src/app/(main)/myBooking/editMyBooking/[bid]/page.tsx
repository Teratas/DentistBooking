import EditBookingForm from "@/components/EditBookingForm";
export default function EditMyBookingPage({params} : {params : {bid : string}}){
    return (
        <main className='mt-[60px]'>
            <EditBookingForm bid={params.bid}/>
        </main>
    );
}