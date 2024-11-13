'use client'

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
import { initialSetup } from "@/redux/features/slice";
type Props = {
    className?: string;
    callbackUrl?: string;
}

export default function RegisterForm() {
    const dispatch = useDispatch<AppDispatch>();
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const email = emailRef.current?.value ?? '';
        const password = passwordRef.current?.value ?? '';
        console.log({ email, password });

        try {
            const user = await userLogin(email, password);
            const token = user.token;
            const userId = user._id;

            sessionStorage.setItem('token', token);
            sessionStorage.setItem('name', user.name);
            sessionStorage.setItem('userId', userId);
            sessionStorage.setItem('email', user.email);

            const [booking, userData, allDentist] = await Promise.all([
                getAllBooking(token),
                getUserProfile(token),
                getAllDentist()
            ]);

            sessionStorage.setItem('role', userData.data.role);
            sessionStorage.setItem('tel', userData.data.tel);
            dispatch(initialSetup({bookingArray : booking.data, dentistArray : allDentist.data}))
            await signIn("credentials", {
                email,
                password,
                redirect: true,
                callbackUrl: "http://localhost:3000/main"
            });
        } catch (error) {
            console.error('Error during login:', error);
        }
    }, [dispatch]);

    return (
        <div data-test="login-form" className='cursor-default select-none font-serif text-black w-full h-full absolute bg-white'>
            <div className='h-[25%]'>
                <div className='px-3 py-5 text-2xl'>Logo</div>
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
                            <TextField data-test="password" id="filled-basic" inputRef={passwordRef}
                                label="Password" variant="filled" className='w-full' />

                            <button data-test="login-button" className='bg-cyan-400 mt-10 w-[100%] h-[50px]' onClick={handleSubmit}>Sign In</button>

                            <div className='pt-5 w-[100%] m-auto'>
                                <div className='px-12 text-sm text-center'>or sign up with</div>
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