'use client'
import { assets } from "../../public/images/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import styles from './animation.module.css' 
import { useSession } from "next-auth/react";
export default function MainPageNavigateBar(){
    // const [dropClick, setDropClick] = useState<boolean>(false);
    const pageStateRef = useRef<number>(0);
    const [pageState, setPageState] = useState<number>(pageStateRef.current)
    const {data : session, status} = useSession();
    const role = sessionStorage.getItem('role');
    // if(location.href == 'http://localhost:3000/main') set
    console.log(role)
    
    
    return (
        <div className={`font-serif w-full select-none cursor-default z-30 ${styles.cursorNavigate}`}>
            <div className=' text-black  flex flex-row-reverse rounded-md mx-auto w-[100%] h-[50px] z-30 top-[4%] translate-x-[-50%] translate-y-[-50%] left-[50%] fixed'>
                {
                                session ?
                                <Link className={` py-3 px-5 text-center `} href='/api/auth/signout'>Log-Out</Link>
                                :
                                <Link className={` py-3 px-5 text-center `} href='/api/auth/signin'>Log-In</Link>

                }
                <Link data-test = "go-to-dentists" href='/dentistPage' onClick={() => {setPageState(3); pageStateRef.current  = 3}} 
                className={` relative mt-auto py-3 px-5 text-center  ${(pageState == 3) ? 'bg-black text-white rounded-full' : ''} `}>
                    Dentists
                {/* <div className='hover:bg-blackabsolute bg-black w-[1px] left-[20%] h-[2px]'></div> */}
                </Link>

                {
                    (role == 'admin') ?
                    <Link href='/myBooking' onClick={() => {setPageState(1); pageStateRef.current  = 1}}className={` py-3 px-5 text-center ${(pageState == 1) ? 'bg-black text-white rounded-full' : ''}`}>All-Booking</Link>

                    :
                    ''
                }
                 <Link onClick={() => {setPageState(2); pageStateRef.current = 2;}} className={`${styles.navigate}  py-3 px-5 text-center ${(pageState == 2) ? 'bg-black text-white rounded-full' : ''} `} href='/myProfile'>My-Profile</Link>

                <Link onClick={() => {setPageState(0); pageStateRef.current = 0}} className={`  py-3 px-5 text-center ${(pageState == 0) ? 'bg-black text-white rounded-full' : ''}`} href='/main'>
                    {/* <div className='bg-black h-full rounded-lg'> */}
                        Homepage
                    {/* </div> */}
                </Link>
                

                {/* <div className='group right-0' onClick={() => setDropClick(!dropClick)}>
                    <div className='px-10 w-[100px]'>
                        <Image alt='' src={assets.dropdownIcon} className="w-[75%] py-2"/>
                    </div>
                    <div className={` absolute dropdown-menu right-0 py-2 ${(dropClick == false) ? 'hidden' : ''}`}>
                        <div className='flex flex-col gap-2 w-36 py-5 px-5 bg-slate-100'>
                            {
                                session ?
                                <Link className='text-black' href='/api/auth/signout'>Log-Out</Link>
                                :
                                <Link className='text-black' href='/api/auth/signin'>Log-In</Link>

                            }
                        </div>

                    </div>
                </div> */}
            </div>
        </div>
    );
}