"use client"

import Link from "next/link";

export default function  Home() {
    
    return (
        <div className="flex items-center justify-center h-screen w-screen gap-x-[80px]">
            <Link href={'/b2b'} className="rounded-[25px] bg-blue-500 text-white text-[30px] p-[10px] px-[20px] flex items-center justify-center font-bold" >B2B</Link>
            <Link href={'/advisory-dashboard'} className="rounded-[25px] bg-blue-500 text-white text-[30px] p-[10px] px-[20px] flex items-center justify-center font-bold" >Advisory Dashboard</Link>
        </div>

    );
}