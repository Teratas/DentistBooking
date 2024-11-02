'use client'
import { Button } from "@mui/material";
import DentistCatalog from "@/components/DentistCatalog";
// import DentistCatalogItem from "@/components/dentistCatalogItem";
import AddDentistForm from "@/components/AddDentistForm";
import DentistCatalogItem from "@/components/DentistCatalogItem";
import getAllDentist from "@/libs/getAllDentist";
export default function DentistPage(){
    // const dentistArray = await getAllDentist();
    // console.log(dentistArray)
    const role = sessionStorage.getItem('role')
    return (
        <main className='relative mt-[60px]'>
            {/* <DentistCatalogItem /> */}
            <DentistCatalog />

            {
                (role == 'admin') ? 
                // <div className='absolute right-5 bottom-0'>
                    <Button variant="contained">Add</Button>
                // </div>
                :''
            }
            {/* <AddDentistForm /> */}
        </main>
    );
}