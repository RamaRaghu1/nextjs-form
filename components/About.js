import Mission from "./../public/assets/mission.webp"
import aboutImage from "./../public/assets/aboutimage.webp"
import Vision from "./../public/assets/vision.webp";
import Courses from "./../public/assets/courses.jpeg"

import Image from "next/image"
export default function About() {
    return (
        <>
{/* section1 */}
            <div className="flex gap-8 md:mx-24 m-8 flex-col md:flex-row items-center">
                <div className="w-5/6"> <Image src={aboutImage} /></div>
                <div className="flex flex-col gap-4 w-5/6 text-[#A5A6A8] text-md font-medium items-center">
                    <h1 className=" font-bold md:text-3xl text-2xl text-center text-[#15265D]">Kairaa Blockchain Academy: Your Gateway to Blockchain Mastery</h1>

                    <p >Kairaa Blockchain Academy is a leading online educational institution offering a variety of courses and programs tailored to students all over the world. With its focus on flexibility and comprehensive support, Kairaa Academy has become a popular destination for students wishing to advance their academic goals or acquire new skills.</p>
                    <p>We guarantee to unlock the full potential of your skills, paving a path towards success.</p>

                    <p>
                        Step into the future with our latest courses, curated to meet the ever-evolving demands of the tech industry, and distinguish yourself as the best of the best, and set yourself apart as the epitome of excellence and expertise.
                    </p>
                    <button className="bg-[#FF8C19] text-white font-bold rounded-full w-fit p-4">Explore Courses</button>
                </div>
            </div>
{/* section2 */}

            <div className="bg-[#15265D] h-[80vh] my-12  p-4">

                <div className="flex md:w-3/5 w-full m-auto h-1/2">

                    <div className="flex flex-col gap-4 md:p-8 p-4">
                        <h2 className="font-bold text-white md:text-4xl text-2xl">OUR <span className="text-[#FF8C19]">VISION</span></h2>
                        <p className="text-white md:text-xl text-lg">To be a leading force in shaping a blockchain-powered world through education and innovation.</p>

                    </div>
                    <Image src={Vision} className="w-36 h-36 md:w-60 md:h-60"  />
                </div>

                <div className="flex md:flex-row  md:w-3/5 w-full m-auto h-1/2">
                    <Image src={Mission}  className="w-36 h-36 md:w-56 md:h-56" />
                    <div className="flex flex-col gap-4 md:p-8 p-4 ">
                        <h2 className="font-bold text-white md:text-4xl text-2xl text-end">OUR <span className="text-[#FF8C19]">MISSION</span></h2>
                        <p className="text-white md:text-xl text-lg text-end">To bridge the knowledge gap in blockchain technology by offering high-quality, industry-relevant education to a global audience.</p>
                    </div>
                </div>


            </div>

{/* section3 */}
<div className="flex md:mx-24 items-center m-8">
            <div className=" text-[#A5A6A8] flex flex-col gap-2">
                <h3 className="text-2xl text-[#15265D] font-bold">How Does Kairaa Academy Deliver Its Courses?</h3>
                <p>All our courses are run live and instructor-led.</p>
                <p>We believe that every great course has three key elements:</p>
            

                <p className="font-bold"> 
              1. Happy, engaged learners are fast learners.</p>
                <p>Training must be fun and hands-on to be engaging.</p>
                <p>As the saying goes: <span className="font-bold text-[#FF8C19]">“Tell me and I forget, teach me and I remember, involve me and I learn.”</span></p>
    

                <p className="font-bold">2. Small classes are impactful classes.</p>
                <p>We limit our classes to 8 people.</p>

                <p className="font-bold ">3. Experienced, enthusiastic trainers</p>
                <p>Our trainers have an average of 12 years of experience training.</p>
            </div>

<Image src={Courses} className="md:block hidden"/>
            </div>

{/* section4 */}
            <div className=" md:mx-20 bg-[#EEEEEE] p-8 my-8 flex flex-col gap-4 items-center rounded-lg h-4/6">
            <h3 className="text-xl font-bold ">Ready to kickstart your career? </h3>
                <p className=" font-bold text-2xl">Request a Demo Lecture</p>
             
                <button className="bg-[#FF8C19] text-white font-bold rounded-xl w-fit py-2 px-3">Get Started Now</button>
            </div>
        </>
    )
}