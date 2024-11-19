'use client'
import Image from "next/image";
import { useRef, useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { FormControl, TextField, Button } from "@mui/material";
import userLogin from "@/libs/userLogin";
import { AppDispatch } from "@/redux/store";
import getUserProfile from "@/libs/getUserProfile";
import getAllBooking from "@/libs/getAllBooking";
import getAllDentist from "@/libs/getAllDentist";
import { initialSetup, setMyBooking } from "@/redux/features/slice";
import { assets } from "public/images/assets";
import { useRouter } from "next/navigation";
type Props = {
    className?: string;
    callbackUrl?: string;
}

export default function RegisterForm() {
    const dispatch = useDispatch<AppDispatch>();
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const router = useRouter()
    const handleSubmit = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        console.log({ email, password });
        if(!email || !password){
            alert('Please enter your account information')
            return;
        }
        try {
            const user = await userLogin(email, password);
            const token = user.token;
            const userId = user._id;

            sessionStorage.setItem('token', token);
            sessionStorage.setItem('name', user.name);
            sessionStorage.setItem('userId', userId);
            sessionStorage.setItem('email', user.email);
            const userData = await getUserProfile(token)
            sessionStorage.setItem('role', userData.data.role);
            sessionStorage.setItem('tel', userData.data.tel);
                
            sessionStorage.setItem('setupDentist' , '0');
            sessionStorage.setItem('setupBooking', '0');
            await signIn("credentials", {
                email,
                password,
                redirect: false,
                callbackUrl: "http://localhost:3000/main"
            });
            router.push('/main')
        } catch (error) {
            console.error('Error during login:', error);
            alert('Failed to Login')
            return;
        }
    }, [dispatch]);

    return (
        <div data-test="login-form" className='cursor-default select-none font-serif text-black w-full h-full absolute bg-white'>
            <div className='h-[25%] w-[5vw] relatives'>
                <div className='absolute w-[5vw] top-[2%] left-[3%] h-full'>
                    <Image src={assets.dentistIcon} alt=''/>
                </div>
            </div>
            <div className='w-[50%] m-auto'>
                <div className='m-auto'>
                    <div className='absolute'>
                        <div data-test="signin-page-text" className='text-xl'>Sign In to WaiMaiNong</div>
                    </div>
                    <div className='py-10'>
                        <form action="">
                            <div>Email</div>
                            <TextField data-test="email" id="filled-basic" inputRef={emailRef}
                                label="Email" variant="filled" className='w-full' />
                            <div className='pt-6'>Password</div>
                            <TextField data-test="password" id="filled-basic" type="password" inputRef={passwordRef}
                                label="Password" variant="filled" className='w-full' />
                            
                            <button data-test="login-button" className='bg-cyan-500 rounded-lg hover:bg-cyan-400 text-white mt-10 w-[100%] h-[50px]' onClick={handleSubmit}>Sign In</button>

                            
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}