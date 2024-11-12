import RegisterForm from "@/components/RegisterForm";
import getDentistProfile from "@/libs/getDentistProfile";
import Image from "next/image";
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";
import AllRegisterLoginForm from "@/components/AllRegisterLoginForm";
import TrueRegisterForm from "@/components/TrueRegisterForm";
import { assets } from "../../../public/images/assets";
export default async function RegisterPage(){
    // const res = await getDentistProfile();
    // console.log(res.data);
    return (
        
        <div className='relative w-[100vw] h-full'>
            <Suspense fallback={<CircularProgress  />}>

                <div className='h-full w-full aboslute'>
                        <AllRegisterLoginForm />
                    <div className='pointer-events-none select-none'>
                        <Image src={assets.bgLogin} className='h-[100vh]' alt='' />
                    </div>
                
                </div>
            </Suspense>
        </div>
    );
}