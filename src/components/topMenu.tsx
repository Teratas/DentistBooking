'use client'
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import Sidebar from "./Sidebar";
import { useSession } from "next-auth/react";
import { useRef } from "react";
import { useState } from "react";
export default function TopMenu() {
    // const session = await getServerSession(authOptions)
    const {data : session, status} = useSession();
    // var bar = useRef<boolean>(false);
    
    return (
        <div className="py-2 text-black bg-black z-30 top-0 flex flex-row bg-white w-[100%] h-[50px] text-black fixed">
        <div className=' text-white text-3xl'>1</div>
            
            
            {
                session ? 
                <Link className='right-0 absolute px-5' href='/api/auth/signout'>Sign-Out</Link>
                :
                <Link className='right-0 absolute px-5' href='api/auth/signin'>Sign-In</Link>
            }
            <Link className='right-12 absolute px-10' href="/register">Register</Link>
            
        </div>
    );
}