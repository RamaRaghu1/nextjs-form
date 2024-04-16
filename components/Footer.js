import React from 'react'
import Link from 'next/link';
import { FaTwitter,FaInstagramSquare,FaLinkedin,FaFacebookSquare  } from "react-icons/fa";
import { IoCallSharp,IoMailSharp,IoLocationSharp  } from "react-icons/io5";
const Footer = () => {
  return (
    <>
   
   <div className='flex md:flex-row flex-col justify-around space-4 bg-blue-500 text-white '>
   <div className='p-4'>
    {/* <img src={Logo} className='h-18 w-10'/> */}
    
    <p className='pt-2'>Kairaa Blockchain Academy is a top-</p>
    <p>notch online learning center that </p>
    <p>offers a wide range of courses.</p>
   </div>
   
  
   <div className='p-4'>
   <h4 className='text-white text-xl font-bold'>Get in Touch</h4>
    <ul>
      <div className='flex items-center gap-2'>
      <IoMailSharp />
      <li className="">support@kairaa.in</li>
      </div>
      <div className='flex items-center gap-2'>
      <IoCallSharp />
      <li>+91-7092774077</li>
      </div>
     <div className='flex items-center gap-2'>
     <IoLocationSharp />
     <li>131, 2nd floor, DB Road, RS Puram,Coimbatore - 641002.</li>
     </div>
       
    
       
    </ul>
   </div>
   <div className='p-4'>
   <h4 className='text-white text-xl font-bold'>Follow Us</h4>
    <ul className='flex text-4xl gap-2'>
      <li><Link href={"#"}><FaTwitter /></Link></li>
      <li><Link href={"#"}><FaInstagramSquare /></Link></li>
      <li><Link href={"#"}><FaLinkedin /></Link></li>
      <li><Link href={"#"}><FaFacebookSquare /></Link></li>
    </ul>
   </div>
   </div>
   <div>
    <p className='text-white  bg-blue-500 text-center text-sm p-2'>© Copyright 2024 - Kairaa Blockchain Academy</p>
    <div>
        
    </div>
   </div>
   </>
  )
}

export default Footer