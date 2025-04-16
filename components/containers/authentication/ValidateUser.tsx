"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname  } from 'next/navigation';
import axios from "axios";

const ValidateUser = ({keepPage = false, checkToken = false}:any) => {
    const router = useRouter()
    const pathname = usePathname();
    const validateUser = async (token:any) => {
        try {
            const response: any = await axios.get('https://api.brexe.com/validate', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if(response.data.authenticate){
                if(!keepPage){
                    router.push('/')
                }
            }else{
                if(!(pathname === '/sign-in' || pathname === '/sign-up')){
                    localStorage.clear();
                    router.push('/sign-in')
                }
            }
        } catch (error) {
            if(!(pathname === '/sign-in' || pathname === '/sign-up')){
                    localStorage.clear();
                    router.push('/sign-in')
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            validateUser(token)
        }else{
            localStorage.clear();
            if(checkToken){
                router.push('/sign-in')
            }
        }
    }, [])
    return (
        <></>
    )
}

export default ValidateUser;