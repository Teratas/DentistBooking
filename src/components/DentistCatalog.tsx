'use client'
import { useAppSelector } from "@/redux/store";
import getAllDentist from "@/libs/getAllDentist";
import { dataType } from "@/libs/updateDentistProfile";
import DentistCatalogItem from "./DentistCatalogItem";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { setAllDentist } from "@/redux/features/slice";
export default function DentistCatalog() {
    // const dentistArray = await getAllDentist();
    // console.log(dentistArray)
    // const array = dentistArray;
    const dispatch = useDispatch<AppDispatch>()
    let array = useAppSelector(state => state.slice.allDentist)
    // const initSetup = sessionStorage.getItem('setupDentist');
    
    useEffect(() => {
        const getDentistData = async () => {
            if(sessionStorage.getItem('setupDentist') == '0'){
                const res = await getAllDentist();
                array = res.data;
                if(res.success){
                    // alert('Success')
                    dispatch(setAllDentist(res.data))

                }
                else{
                    alert('Failed')
                    return;
                }
                sessionStorage.setItem('setupDentist', '1')
            }
        }
        getDentistData();
        
    },[])

    console.log(array)
    return (
        <div data-testid = "dentistcatalog"className='relavitve w-[100vw] h-full'>
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