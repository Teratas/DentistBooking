import DentistProfile from "@/components/DentistProfile";
import getDentistProfile from "@/libs/getDentistProfile";
import createNewBookingDid from "@/libs/createNewBookingDid";
import { Button } from "@mui/material";
import { useRef } from "react";
import AllDentistProfileAndEditForm from "@/components/AllDentistProfileAndEditForm";
export default function DentistDetailPage({params} : {params : {did : string}}) {
    // const dentistData = await getDentistProfile(params.did);
    // console.log(dentistData)
    // const makeBooking = async () => {
    //     await createNewBookingDid();
    // }
    // alert(1)
    
    return (
        <main title='dentist' className='z-0 text-black relative w-[100vw] h-[100vh]'>
            <div className='w-[100vw] h-[100vh] bg-gradient-to-r from-teal-100 to-stone-400 absolute'></div>


                <div className='absolute mt-[60px]'>
                    <AllDentistProfileAndEditForm did={params.did}/>
                </div>

        </main>
    );
}

//672c71da844d29e27e5fb883
//672c71da844d29e27e5fb883
//672c71da844d29e27e5fb883
//672c917d4fd1c8b7cd86e61b