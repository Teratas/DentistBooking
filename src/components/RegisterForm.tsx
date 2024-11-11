'use client'
import Link from "next/link";
import {assets} from '../../public/images/assets'
import Image from "next/image";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import userRegister from "@/libs/userRegister";
import { FormControl, TextField, Button } from "@mui/material";
import * as styles from'./LoginForm.module.css';
import userLogin from "@/libs/userLogin";
import { AppDispatch } from "@/redux/store";
import { createUser, setAllDentist, setMyBooking, setToken, setUserId } from "@/redux/features/slice";
import getUserProfile from "@/libs/getUserProfile";
import getAllBooking from "@/libs/getAllBooking";
import getAllDentist from "@/libs/getAllDentist";
type Props = {
    className?: string;
    callbackUrl?: string;
}
export default function RegisterForm() {
    const dispatch = useDispatch<AppDispatch>()
    // const [name, setName] = useState<string>('');
    // const [tel, setTel] = useState<string>('');
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    // const = (email : string, password : stromg) 
    const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const email = emailRef.current?.value ?? '';
        const password = passwordRef.current?.value ?? '';
        console.log({email : email, password : password})        
        const user  = await userLogin(email, password);
        dispatch(setToken(user.token))
        dispatch(setUserId(user._id));
        console.log({email : email, password : password})
        console.log(user.token) 
        const booking = await getAllBooking(user.token);
        dispatch(setMyBooking(booking.data))
        sessionStorage.setItem('token', user.token)
        sessionStorage.setItem('name', user.name)
        sessionStorage.setItem('userId', user._id)
        sessionStorage.setItem('email', user.email)
        const userData = await getUserProfile(user.token);
        sessionStorage.setItem('role', userData.data.role)
        sessionStorage.setItem('tel', userData.data.tel)
        const allDentist = await getAllDentist();
        dispatch(setAllDentist(allDentist.data))
        // alert(userData.tel)
        await signIn("credentials", {
            email,
            password,
            redirect: true,
            callbackUrl: "http://localhost:3000/main"
        });

        // dispatch(setToken(await user.token));
    }
    return (
        <div data-test="login-form"className='cursor-default select-none font-serif text-black w-full h-full absolute bg-white'>
            <div className='h-[25%]'>
                <div className='px-3 py-5 text-2xl'>Logo</div>
            </div>
            <div className='w-[50%] m-auto'>
                <div className='m-auto'>
                    <div className='absolute'>
                        <div data-test = "signin-page-text" className='text-xl'>Sign In to WaiMaiNong</div>
                    </div>
                    <div className='py-10'>
                        <form action="">
                            <div >Email</div>
                            <TextField data-test="email" id="filled-basic" inputRef={emailRef}
                             label="Email" variant="filled" className='w-full'/>
                            <div className='pt-6'>Password</div>
                            <TextField data-test="password" id="filled-basic" inputRef={passwordRef}
                            label="Password" variant="filled" className='w-full'/>

                            <button data-test="login-button"className='bg-cyan-400 mt-10 w-[100%] h-[50px]' onClick={onSubmit}>Sign In</button>
                            
                            <div className='pt-5 w-[100%] m-auto'>
                                <div className=' px-12 text-sm text-center' >or sign up with</div>
                                {/* <svg width='100%' height='40' viewBox='0 0 188 1' className=""> */}
                                    {/* <path d='M0 0 L186 0' className="fill-none stroke-2 stroke-black"/> */}
                                    {/* <path d='M0 10 L40 10' className="fill-none stroke-2 stroke-black"/> */}
                                    {/* <div>1</div> */}
                                    {/* <path d='M146 10 L188 10' className="fill-none stroke-2 stroke-black"/> */}

                                {/* </svg> */}
                                
                            </div>
                            <div className='mx-auto'>
                                <div className='flex flex-row'>
                                        <div>item1</div>
                                        <div>item2</div>
                                        <div>item3</div>
                                 </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
}