"use client";
import MyModal from "./Modal"
import { useState } from "react";
import Carousel from "./Carousel"
import Faq from "./Faq"
import Hero from "./Hero"
import Section from "./Section"

export default function HomePage() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>

            <Hero />


            <Section />
            
            <Carousel />

            <Faq />


            <div className="bg-slate-300 items-center justify-center flex flex-col p-12">
                <h3 className="">Still have questions?</h3>
                <p className="">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                <button className="bg-blue-500 rounded-lg p-4 " onClick={() => setShowModal(true)}>Get in Touch</button>
                <MyModal onClose={() => setShowModal(false)} visible={showModal} />
            </div>
        </>
    )
}