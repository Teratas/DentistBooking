'use client'
import { useState } from "react";
import Link from "next/link";
import { dataType } from "@/libs/updateDentistProfile";
import DentistProfile from "./DentistProfile";
import EditDentistForm from "./EditDentistForm";
import { useAppSelector } from "@/redux/store";
export default function AllDentistProfileAndEditForm({did} : {did:string}) {
    const allDentistArray : dataType[]= useAppSelector(state => state.slice.allDentist)
    const dentistData= allDentistArray.filter((data) => data.id === did)
    const dentist = dentistData[0] ?? {name : '', hospital : '', address : '', expertist : '', tel : '', picture : ''};
    const [editState, setEditState] = useState(false);
    const role = sessionStorage.getItem('role')
    return (

            <div className=' w-[100vw] h-[90vh]'>
                <div className='absolute left-[50%] translate-x-[-50%] w-[80vw] h-[80vh]'>
                    <div className={`absolute ${(editState == false) ? '' : 'invisible none'} z-0`}>
                        <DentistProfile did={did} dentist={dentist}/>
                    </div>
                    <div className={`absolute z-0 ${(editState == true) ? '' : 'invisible none'}`}>
                        <EditDentistForm did={did} dentist={dentist}/>
                    </div>
                </div>
                <div className=' w-[16vw] h-[6vh] z-20 bottom-2 right-10 absolute'>
                    <button onClick={() => {setEditState(!editState)}} className='font-serif text-white bg-stone-500 w-full h-full rounded-xl absolute hover:bg-teal-300'>Edit</button>
                </div>
            </div>



    );
}
            {/* <div className=' w-[16vw] h-[6vh] z-20 right-2 top-12 absolute'>
                <button onClick={() => {setEditState(!editState)}} className='bg-lime-400 w-full h-full rounded-xl absolute'>Edit</button>
            </div> */}