'use client'
import { useAppSelector } from "@/redux/store";
import getAllDentist from "@/libs/getAllDentist";
import { dataType } from "@/libs/updateDentistProfile";
import DentistCatalogItem from "./DentistCatalogItem";
export default function DentistCatalog() {
    // const dentistArray = await getAllDentist();
    const array : dataType[]= useAppSelector(state => state.slice.allDentist)
    // console.log(dentistArray)
    // const array = dentistArray;
    console.log(array)
    return (
        <div className='relavitve w-[100vw] h-full'>
            <div className='absolute w-[90vw] h-full left-[8.5vw]'>
                <div className='flex flex-row flex-wrap '>
                    {
                        array.map(data =>
                                <div className='px-[1vw] py-[1.5vh]'>
                                    <DentistCatalogItem data={data}/>
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
}