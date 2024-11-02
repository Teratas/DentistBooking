'use client'
import { useAppSelector } from "@/redux/store";
import getAllDentist from "@/libs/getAllDentist";
import { dataType } from "@/libs/updateDentistProfile";
import DentistCatalogItem from "./DentistCatalogItem";
export default function DentistCatalog() {
    // const dentistArray = await getAllDentist();
    const array = useAppSelector(state => state.slice.allDentist)
    // console.log(dentistArray)
    // const array = dentistArray;
    console.log(array)
    return (
        <div className='text-black mt-[50px] bg-gray-100 h-[100vh]'>

            <div className='w-full'>
                <div className='flex flex-row mx-auto'>
                    {
                        array.map((data : dataType, index : number) => (
                         <DentistCatalogItem key={index} data={data} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}