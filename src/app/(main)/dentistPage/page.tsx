'use client'

import Link from "next/link";
import { Button } from "@mui/material";
// import AddDentistForm from "@/components/AddDentistForm";
import DentistCatalog from "@/components/DentistCatalog";
// import DentistCatalogItem from "@/components/dentistCatalogItem";
import AddDentistForm from "@/components/AddDentistForm";
import DentistCatalogItem from "@/components/DentistCatalogItem";
import { useState } from "react";
import getAllDentist from "@/libs/getAllDentist";
export default function DentistPage(){
    // const dentistArray = await getAllDentist();
    // console.log(dentistArray)
    const role = sessionStorage.getItem('role')
    const [addState, setAddState] = useState(false);
    return (
        <main className='text-black'>
            {/* <DentistCatalogItem /> */}
            <div className='w-[100vw] h-[100vh] z-0 absolute bg-gradient-to-r from-stone-400 to-teal-200'>

            </div>
            <div className='mt-[60px] absolute'>
                <DentistCatalog />
            </div>

            {
                (role == 'admin') ? 
                    <div >
                        <div  className={`fixed z-30 m-auto top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${(addState == true) ? 'block visible' : 'none hidden'}`}>
                            <AddDentistForm />
                        </div>
                        <div className=' right-10 bottom-20 fixed text-lg hover:text-xl hover:text-slate-700'>
                            <Link data-test = "add-dentist" href='/addDentistForm'>Add Dentist</Link>
                        </div>
                    </div>
                :''
            }
        </main>
    );
}