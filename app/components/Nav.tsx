import Link from "next/link"
import React from 'react'

export default function Nav(){
    return(
        <nav className='flex justify-between items-center m-4 p-4'>
            <h1 className="text-3xl font-extrabold">
                astrobase9
            </h1>
                <ul className='flex items-center gap-8'>
                    <li className="flex items-center text-xl relative cursor-pointer">
                        <Link href='/'>
                            Home
                        </Link>
                    </li>
                    <li className="flex items-center text-xl relative cursor-pointer">
                        <Link href='/about'>
                            About Us
                        </Link>
                    </li>
                    <li className="flex items-center text-xl relative cursor-pointer">
                        <Link href={'/offerings'}>
                            Offerings
                        </Link>
                    </li>
                    <button className="flex items-center text-xl relative cursor-pointer border-slate-700 hover:bg-slate-700 focus:outline-none rounded-full border py-2 px-4">
                        <Link href={'/contact'}>
                            Contact Us
                        </Link>
                    </button>
                </ul>
        </nav>
    )
}