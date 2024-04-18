"use client";
import MyModal from "./Modal"
import { useState } from "react";
import Carousel from "./Carousel"
import Faq from "./Faq"
import Hero from "./Hero"
import Section from "./Section"
import Link from "next/link";

export default function HomePage() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>

            <Hero />


            <Section />

            <div className='text-center m-12 mx-auto py-3 px-10'>
        <div className='sm:text-3xl text-2xl font-bold mb-5'>
          <div>Craft Your Journey in Blockchain with  <span className='text-[#FF8C19]'>Kairaa Blockchain Academy</span>
          </div>
        </div>
        <p className='font-medium text-lg leading-7 max-w[700px] mx-auto'>
          Learning about blockchain is a fascinating journey into the world of
          decentralized digital ledgers and cryptographic technology.
          Blockchain is a revolutionary technology that enables decentralized, transparent, and secure peer-to-peer transactions and data management. At its core, a blockchain is a distributed ledger that records transactions across a
          network of computers in a way that is immutable, transparent, and tamper-proof.</p>
        <Link href="/courses"><button className='bg-[#FF8C19] rounded-lg p-2 font-bold text-white text-xl mt-3'>Know More</button></Link>




      </div>










            
            <Carousel />

            <Faq />


            <div className=" md:mx-20 bg-[#EEEEEE] p-8 my-8 flex flex-col gap-4 items-center rounded-lg h-4/6">


<h3 className="text-xl font-bold ">Still have questions?</h3>
<p className=" font-bold text-2xl">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
<button className="bg-[#FF8C19] text-white font-bold rounded-full w-fit p-4" onClick={() => setShowModal(true)}>Get in Touch</button>
<MyModal onClose={() => setShowModal(false)} visible={showModal} />
</div>


        </>
    )
}