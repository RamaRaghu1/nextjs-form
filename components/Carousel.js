"use client"
import { useRef, useState, useEffect } from 'react';
import React from "react";
import Java from "./../public/assets/java.jpeg";
import Cpp from "./../public/assets/c++.jpeg";
import Webdev from "./../public/assets/webdev.jpeg"
import C from "./../public/assets/c.jpeg";
import Flutter from "./../public/assets/flutter.jpeg"
import Blockchain from "./../public/assets/blockchain.jpeg"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

export default function Carousel() {
    const sliderContainerRef = useRef(null);
    const sliderRef = useRef(null);
    const [cards, setCards] = useState([]);
    const [sliderContainerWidth, setSliderContainerWidth] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    let elementsToShow = 3;
    const courses = [
        {
            id: 1,
            img: Java,
            course: "Advanced Java Training"
        },
        {
            id: 2,
            img: Cpp,
            course: "Programming with C++"
        },
        {
            id: 3,
            img: Blockchain,
            course: "Fundamentals of Blockchain"
        },
        {
            id: 4,
            img: C,
            course: "Programming with C"
        },
        {
            id: 5,
            img: Flutter,
            course: "Flutter"
        },
        {
            id: 6,
            img: Webdev,
            course: "Web Development"
        },
      
    ]

    useEffect(() => {
        const sliderContainer = sliderContainerRef.current;
        const slider = sliderRef.current;
      

        if (sliderContainer) {
            const width = sliderContainer.clientWidth;
            setSliderContainerWidth(width);
            setCardWidth(width / elementsToShow);
        }

        if (sliderContainer && slider) {
            const cards = Array.from(sliderContainer.getElementsByTagName('li'));
            setCards(cards);

            const cardWidth = sliderContainerWidth / elementsToShow;
            slider.style.width = `${cards.length * cardWidth}px`;

            for (let i = 0; i < cards.length; i++) {
                const element = cards[i];
                element.style.width = `${cardWidth}px`;
            }
        }
    }, [sliderContainerWidth]);

    const prev = () => {
        const slider = sliderRef.current;
        const cardWidth = sliderContainerWidth / elementsToShow;
        if (slider) {
            const currentMarginLeft = parseInt(slider.style.marginLeft.slice(0, -2)) || 0;
            const newMarginLeft = Math.min(currentMarginLeft + cardWidth, 0);
            slider.style.marginLeft = `${newMarginLeft}px`;
        }
    };
    
    const next = () => {
        const slider = sliderRef.current;
        const cardWidth = sliderContainerWidth / elementsToShow;
        const maxMarginLeft = -cardWidth * (cards.length - elementsToShow);
        if (slider) {
            const currentMarginLeft = parseInt(slider.style.marginLeft.slice(0, -2)) || 0;
            const newMarginLeft = Math.max(currentMarginLeft - cardWidth, maxMarginLeft);
            slider.style.marginLeft = `${newMarginLeft}px`;
        }
    };
    

    return (
        <>
            <h2 className='md:text-3xl text-2xl font-bold text-center'>Explore our learning Programs</h2>
            
            <div className="flex m-8">
                <div className="w-0.5/12 flex items-center">
                    <div className="w-full text-right">
                        <button className="mr-5" onClick={prev}>
                            <IoIosArrowBack  />
                        </button>
                    </div>
                </div>
                <div className="w-11/12 overflow-x-auto scrollbar-hidden" id="sliderContainer" ref={sliderContainerRef}>
                    <ul id="slider" className="flex w-full transition-margin duration-700" ref={sliderRef}>
                        {courses.map((dt) => {
                            return (
                                <li key={dt.id} className="  p-4  ">
                                    <div className='shadow-md rounded-lg p-5 h-full bg-[#F1F5F9]'>
                                        <Image src={dt.img} className='h-200 w-full object-cover rounded-md' />
                                        <h2 className="md:text-xl text-lg p-2 font-semibold">{dt.course}</h2>
                                        <button className='mt-4 px-3 py-2 rounded-md underline text-[#1c2a59] font-bold'>Read More</button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="w-0.5s/12 flex items-center">
                    <div className="w-full ">
                        <button className="ml-5" onClick={next}>
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
