'use client'
import RegisterForm from "./RegisterForm";
import TrueRegisterForm from "./TrueRegisterForm";
import { useState } from "react";
export default function AllRegisterLoginForm(){
    const [isRegister, setIsRegister] = useState(false);
    return (
        <div data-test="form" className='relative w-[100vw] h-full'>
            <button onClick={() => {setIsRegister(!isRegister)}} className='hover:bg-cyan-500 fixed z-30 right-10 top-10 bg-cyan-600 w-[8vw] rounded-xl h-[4vh]'>
                Register
            </button>
                <div className={`${(isRegister == true) ? 'invisible' : ''} absolute w-[50vw] h-[100vh] `}>
                    <RegisterForm/>
                </div>
                <div className={`${(isRegister == false) ? 'invisible' : ''} absolute w-[50vw] h-[100vh]`}>
                    <TrueRegisterForm />
                </div>
        </div>
    );
}