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
        <div className='flex flex-row flex-wrap'>
            {
                array.map(data => 
                        <div className='px-2 py-2'>
                            <DentistCatalogItem data={data}/>
                        </div>
                    )
            }
        </div>
    );
}