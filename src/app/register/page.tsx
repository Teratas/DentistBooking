import RegisterForm from "@/components/RegisterForm";
import getDentistProfile from "@/libs/getDentistProfile";
import Image from "next/image";
import AllRegisterLoginForm from "@/components/AllRegisterLoginForm";
import TrueRegisterForm from "@/components/TrueRegisterForm";
import { assets } from "../../../public/images/assets";
export default async function RegisterPage(){
    // const res = await getDentistProfile();
    // console.log(res.data);
    return (

        <div className='h-full'>
            <AllRegisterLoginForm />
            <div className='pointer-events-none select-none'>
                <Image src={assets.bgLogin} className='h-[798px]' alt='' />
            </div>
            
        </div>
    );
}