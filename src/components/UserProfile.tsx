'use client'
import Image from "next/image";
import { assets } from "../../public/images/assets";
import { useSession } from "next-auth/react";
import { useAppSelector } from "@/redux/store";
import getUserProfile from "@/libs/getUserProfile";
import { useSelector } from "react-redux";
export default function UserProfile() {
    // const user = sessionStorage.getItem('user')
    // const user = await getUserProfile((token == null) ? '' : token);
    // console.log(user)
    const name = sessionStorage.getItem('name')
    const email = sessionStorage.getItem('email')
    const tel = sessionStorage.getItem('tel')
    // const role = sessionStorage.getItem('role')
    const {data : session, status} = useSession();
    // const user = useAppSelector(state => state.slice.user)
    // const user = getData((token == null) ? '' : token)
    // console.log(user)
    return (
            <div className='flex flex-row absolute  w-[50vw] h-[30vh] left-[50%] top-[18vh] translate-x-[-50%] rounded-3xl hover:shadow-lg'>
                <div className='font-serif absolute w-full h-[100%] bg-white rounded-2xl'>
                    <div className=' top-[20%] left-[40%] absolute'>
                        
                        <div className='text-4xl text-bold'>{name}</div>
                        <div className='text-2xl'>{email}</div>
                        <div className='text-2xl'>{tel}</div>
                    </div>
                    <div className='absolute bg-black w-[33%] h-[90%] left-5 top-[50%] translate-y-[-50%] rounded-2xl'>

                    </div>
                </div>

            </div>

    );
}

/*
name
"Alice"
email
"alice@vaccinebooking.com"
tel
"0894452632"
role
"user"
password
"$2a$10$YI9.ZQD2A3uw9em9YVmflO8lvygMpJaJp1KUMZ86f9emHs0vAc76m"
createdAt
2024-10-20T07:06:10.696+00:00
*/