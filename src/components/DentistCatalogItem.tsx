'use client'
import { dataType } from "@/libs/updateDentistProfile";
import Image from "next/image";
import Link from "next/link";
import updateDentistProfile from "@/libs/updateDentistProfile";
import { useAppSelector } from "@/redux/store";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import deleteDentistProfile from "@/libs/deleteDentistProfile";
import { AppDispatch } from "@/redux/store";
import { removeDentist } from "@/redux/features/slice";
export default function DentistCatalogItem({data} :{data : dataType}){
    // const role = sessionStorage.getItem('role');
    // const token = sessionStorage.getItem('token')
    // const tokenX = (token == null) ? '' : token
    // const currentState = useAppSelector(state => state.slice.allDentist)

    // const userIdX = (userId == null) ? '' : userId
    // console.log(token)
    // alert(userId)
    // console.log(data.)
    
    // alert(data._id)

    return (

            <div className='flex flex-col relative w-[95vw] h-[20vh] rounded-lg'>

            <Link href={`/dentistPage/${data.id}`}>
                    <div className='font-serif absolute w-full h-[100%] bg-white'>
                        <div className=' top-[10%] left-[40%] absolute'>
                            
                            <div className='text-lg text-bold'>{data.name}</div>
                            <div>{data.expertist}</div>
                            <div>{data.tel}</div>
                        </div>
                        <div className='absolute bg-black w-[33%] h-[90%] left-2 top-[50%] translate-y-[-50%]'>

                        </div>


                </div>
                </Link>
            </div>

    );
}