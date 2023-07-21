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
                        <Link href='/pages/about'>
                            About Us
                        </Link>
                    </li>
                    <li className="flex items-center text-xl relative cursor-pointer">
                        <Link href={'/pages/offerings'}>
                            Offerings
                        </Link>
                    </li>
                    <li className="flex items-center text-xl relative cursor-pointer">
                        <Link href={'/pages/contact'}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
        </nav>
    )
}