import backgroundImage from "./../public/assets/backgroundimg.jpeg"
import Image from "next/image"



export default function Hero() {
    return (
        <>




            <div className="flex w-screen px-8 h-5/6">
                <div className="  w-1/2 relative">
                    <div className="text-blue-500 font-bold flex flex-col absolute text-left left-10 p-5 md:top-1/4  justify-center items-center gap-4">
                        <h1 className=" text-4xl font-large text-black">Discover Blockchain  Technology with
                            <span className='px-3 text-[#FF8C19]'>Kairaa Blockchain Academy&#x27;s</span> Online Course.</h1>


                        <p className="text-xl md:text-xl text-black">Kairaa Academy is the leading provider of online blockchain courses.
                            We offer a wide range of courses to meet the needs of students of all levels of experience, from beginners to advanced learners.</p>



                        <h1 className=" text-left text-xl md:text-2xl ">Prepare yourself for the next level in your career.</h1>
                        <button className="bg-[#FF8C19] text-white font-bold rounded-lg p-2 w-fit px-3 py-2 ">Get Started
                            Now</button>
                    </div>

                </div>
                <div className="w-1/2 p-5 ">
                    <Image className="rounded-2xl" src={backgroundImage} />
                </div>
            </div>
        </>
    )
}

