'use client'
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import { useSession } from "next-auth/react";
import getUsersProfile from "@/libs/getUserProfile";
import { UseSelector, useSelector } from "react-redux";
import { useAppSelector } from "@/redux/store";
import { state } from "@/redux/features/slice";
import getDentistProfile from "@/libs/getDentistProfile";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

// import { useReducer } from "react";
export default function Home() {
  // const token = sessionStorage.getItem('token');
  // console.log(sessionStorage.getItem('token'))
  // const userProfile = (token == null) ? '' : await getUserProfile(token)
  const { data: session, status } = useSession();
  // const data = await getDentistProfile();
  // alert(data)
    return (
    <main>
      <div className='text-black'>1</div>
        {
          session ? <div>{sessionStorage?.getItem('token')}</div>
          :
          <div>No Connection</div>
        }
       
        
    </main>
  );
}
