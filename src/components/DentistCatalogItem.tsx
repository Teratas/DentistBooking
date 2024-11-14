'use client'
import { dataType } from "@/libs/updateDentistProfile";
import Image from "next/image";
import Link from "next/link";

import deleteDentistProfile from "@/libs/deleteDentistProfile";

export default function DentistCatalogItem({data} :{data : dataType}){
    
    const picture = data.picture
   

    return (

            <div className='flex flex-col relative w-[40vw] h-[30vh] rounded-lg'>

            <Link href={`/dentistPage/${data.id}`}>
                    <div data-test={`dentist-item-${data.name}`} className='font-serif absolute w-full h-[100%] bg-white rounded-2xl hover:bg-stone-100 hover:shadow-xl'>
                        <div className=' top-[10%] left-[55%] absolute'>
                            
                            <div className='text-2xl text-bold'>{data.name}</div>
                            <div className='text-lg text-bold'>{data.expertist}</div>
                            <div className='text-lg text-bold'>{data.tel}</div>
                        </div>
                        <div className='absolute w-[45%] h-[90%] left-[3%] top-[50%] translate-y-[-50%] rounded-full'>
                            <Image className='w-full h-full rounded-2xl aspect-square object-cover' src={picture} alt='' fill={true}/>
                        </div>


                </div>
                </Link>
            </div>

    );
}