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

type Props = {
    className?: string;
    callbackUrl?: string;
}
export default function TrueRegisterForm() {
    const dispatch = useDispatch<AppDispatch>()
    // const [name, setName] = useState<string>('');
    // const [tel, setTel] = useState<string>('');
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const telRef = useRef<HTMLInputElement>(null)
    const nameRef= useRef<HTMLInputElement>(null);

    // const = (email : string, password : stromg) 
    const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const name = nameRef.current?.value
        const email = emailRef.current?.value
        const tel = telRef.current?.value
        const password = passwordRef.current?.value
        if(!name || !email || !tel ||!password ){
            alert('Cannot Create your Account')
            return;
        }
        // console.log(name)
        console.log({
            name,
            email,
            tel,
            password
        })
       const res = await userRegister(name, email, tel, password);
       console.log(res) 
       if(res.success){
            alert('Create Account Success')
        }
        else{
            alert('Sorry Failed to Create Your Account Please Try to Change your Email')
        }
        // dispatch(setToken(await user.token));
    }
    return (
        <div className='z-20 cursor-default select-none font-serif text-black w-full h-full absolute bg-white'>
            <div className='h-[25%] w-[5vw] relatives'>
                <div className='absolute w-[5vw] top-[2%] left-[3%] h-full'>
                    <Image src={assets.dentistIcon} alt=''/>
                </div>
            </div>
            <div className='w-[50%] m-auto'>
                <div className='m-auto'>
                    <div className='absolute'>
                        <div className='text-xl'>Sign Up to WaiMaiNong</div>
                    </div>
                    <div className='py-10'>
                        <form action="">
                            <div >Name</div>
                            <TextField id="filled-basic" inputRef={nameRef}
                             label="Name" variant="filled" className='w-full'/>
                            <div className=''>Email</div>
                            <TextField id="filled-basic" inputRef={emailRef}
                            label="Email" variant="filled" className='w-full'/>
                            <div >Tel</div>
                            <TextField id="filled-basic" inputRef={telRef}
                             label="Tel" variant="filled" className='w-full'/>
                            <div className=''>Password</div>
                            <TextField id="filled-basic" type='password' inputRef={passwordRef}
                            label="Password" variant="filled" className='w-full'/>

                            <button className='bg-cyan-400 mt-10 w-[100%] h-[50px]' onClick={onSubmit}>Sign In</button>
                            


                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
}