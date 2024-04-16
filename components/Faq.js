"use client"
import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";

export default function Faq() {

    const [faqs, setFaqs] = useState(-1);
    const faqData = [
        {
            id: 1,
            question: "What courses does Kairaa Blockchain Academy offer?",
            answer: "Kairaa Blockchain Academy offers a wide range of courses covering blockchain technology, cryptocurrency, smart contracts, decentralized finance (DeFi), and more. Our courses are designed to cater to beginners as well as experienced professionals in the blockchain industry.",
            isOpen: false
        },
        {
            id: 2,
            question: "Are the courses at Kairaa Blockchain Academy suitable for beginners?",
            answer: "Yes, our courses are structured to accommodate learners at all levels, including beginners. We provide comprehensive introductory material, hands-on projects, and expert guidance to ensure that beginners can grasp blockchain concepts effectively."
        },
        {
            id: 3,
            question: "Is financial aid available for Kairaa Blockchain Academy's courses?",
            answer: "Kairaa Blockchain Academy understands the importance of accessibility in education. We offer financial aid options, scholarships, and flexible payment plans to make our courses more accessible to deserving candidates. Contact us to learn more about our financial assistance programs."
        },
       
        {
            id: 4,
            question: "Do you offer any mentorship or career guidance programs?",
            answer: "Currently we have career raodmap which cater to different goals. Coming soon we will include both mentorship and career guidance along with Mock interviews and much more. So stay tuned!"
        },

    ];



    const toggleFaq = (i) => {
        setFaqs(i);
        console.log(`asdfasd ${faqs}`);





    }

    return (
        <>
            <div className="w-full bg-[#eaf9ff] md:p-12 p-4 py-8">
                <div className="flex flex-col gap-4  md:mx-48 m-auto w-4/6 bg-[#eaf9ff]">
                    <h1 className="font-bold md:text-3xl text-xl text-center py-4">Frequently Asked Questions</h1>
                    {faqData.map((e, i) => {
                        return (
                            <div key={i} className="border-b-gray-300 ">
                                <div className="flex justify-between gap-18 text-left ">
                                    <p className="font-bold">{e.question}</p>
                                    {/* <FiPlusCircle className="" onClick={()=> toggleFaq(i)} /> */}
                                    <button
                                        className="w-8 h-8 text-lg text-white font-semibold  bg-blue-600 rounded-full md:text-xl"
                                        onClick={() => toggleFaq(i)}
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="p-4">
                                    {faqs === i && <p>{e.answer}</p>}
                                </div>
                                <hr />

                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}