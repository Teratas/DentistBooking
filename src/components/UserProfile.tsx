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

    const {data : session, status} = useSession();
    // const user = useAppSelector(state => state.slice.user)
    // const user = getData((token == null) ? '' : token)
    // console.log(user)
    return (
        <div className="h-full py-[80px]">
            {/* <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 "> */}
                                        {/* <Image src={assets.picon} className='m-auto my-5 w-[50%]' alt='' /> */}

                <div className=' text-center h-[500px] bg-white m-auto w-[75%] border-2 border-black z-20 rounded-lg'>
                    {/* <div>Profile</div> */}
                    <div className="h-[30%] bg-gradient-to-r from-purple-500 to-pink-500">
                        <div className='absolute mx-[5%] w-[150px] top-[20%] h-[150px] bg-gray-500 rounded-full'></div>

                    </div>
                    {/* <div className='h-[1]'> */}
                        {/* <div className='absolute mx-[5%] w-[150px] top-[10%] h-[150px] bg-gray-500 rounded-full'></div> */}
                    {/* </div> */}
                    <div className='flex flex-row h-[70%]'>
                        <div className='text-center text-white flex flex-col w-[40%] bg-black'>
                            <div className='mt-[90px]'>{`${name}`}</div>
                            <div>{`Email: ${email}`}</div>
                            <div>{`tel: ${tel}`}</div>
                            
                        </div>
                        <div className='w-[60%] bg-red-50'></div>
                    </div>
                </div>
                {/* {
                                session? <div>{name}</div> : ''
                            } */}
            {/* </div> */}
            
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