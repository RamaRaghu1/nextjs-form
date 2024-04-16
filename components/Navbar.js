"use client";

import Image from "next/image"
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from "next/link";
import { LuPhoneCall } from "react-icons/lu";

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "COURSES",
            path: "/courses"
        },
        {
            id: 2,
            link: "ABOUT US",
            path: "/about-kairaa-academy"
        },
        // {
        //     id: 3,
        //     link: "RESOURCES",
        //     path: "#"
        // },
        // {
        //     id: 4,
        //     link: "MORE",
        //     path: "#"
        // },
        {
            id: 5,
            link: "CONTACT US",
            path: "/contact"
        },

    ];
    return (
        <div className="flex justify-between items-center w-full h-20 px-8 text-blue-500 z-999 bg-white ">
            <div className="my-4">
                <Link href={"/"}>
                    <Image src="/assets/logo.webp" width={200}
                        height={100} className="p-2" />
                </Link>
            </div>
            <div className="lg:flex gap-8 hidden">
                <ul className="hidden lg:flex text-[#1c2a59] p-2">
                    {links.map((e, i) => {

                        return (
                            <li
                                key={i}
                                className="px-4 cursor-pointer capitalize font-bold text-[#1c2a59] "
                            >
                                <Link href={`${e.path}`}>{e.link}</Link>
                            </li>
                        )
                    })}

                </ul>

              <div className="flex gap-2 p-2">
              <LuPhoneCall style={{ fontSize: '24px', color: '#3B82F6' }} /> <Link href={`tel:+917092774077`} className="font-bold">+917092774077</Link>
              </div>
                <button className="bg-[#FF8C19] text-white font-bold rounded-lg p-2">
                    <Link href={"/signup"}>Sign Up</Link>
                </button>
            </div>
            <div
                onClick={() => setNav(!nav)}
                className='cursor-pointer pr-4 z-10 text-[#1c2a59] md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}

            </div>

            {nav && (
                <div className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-[#1c2a59] bg-white z-50'>
                    <ul  >
                        {links.map((e, i) => {
                            return (
                                <li
                                    key={i}
                                    className='px-4 cursor-pointer capitalize py-6 text-2xl font-bold '
                                >
                                    <Link href={`${e.path}`}
                                        onClick={() => setNav(!nav)}
                                    >{e.link}</Link>
                                </li>
                            )
                        })}

                    </ul>
                   <div className="flex items-center">
                   <LuPhoneCall style={{ fontSize: '24px', color: '#3B82F6' }} />
                    <Link href={`tel:+917092774077`} className=" font-bold px-4 cursor-pointer py-6 text-2xl text-[#3B82F6]">+917092774077</Link>
                   </div>
                    <button className="bg-[#FF8C19] text-white font-bold rounded-lg p-2">
                        <Link href={"/signup"} className="">Sign Up</Link>
                    </button>
                </div>

            )}


        </div>
    )
}

export default NavBar;