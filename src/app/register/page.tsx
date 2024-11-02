import RegisterForm from "@/components/RegisterForm";
import getDentistProfile from "@/libs/getDentistProfile";
import Image from "next/image";
import { assets } from "../../../public/images/assets";
export default async function RegisterPage(){
    // const res = await getDentistProfile();
    // console.log(res.data);
    return (
        <div className='h-full'>
            <div className='w-[50%] h-[100%] '>
                <RegisterForm/>
            </div>
            <div className='pointer-events-none select-none'>
                <Image src={assets.bgLogin} className='h-[798px]' alt='' />
            </div>
        </div>
    );
}