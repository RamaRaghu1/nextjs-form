import backgroundImage from "./../public/assets/bgHero.jpg"
import Image from "next/image"

export default function Hero() {
    return (
        <>


            <div className="flex w-screen px-8 h-5/6">
                <div className="  w-1/2 relative">
                    <div className="text-blue-500 font-bold flex flex-col absolute top-1/2  justify-center items-center gap-4">
                        <h1 className=" text-center text-xl md:text-2xl ">Prepare yourself for the next level in your career.</h1>
                        <button className="bg-[#FF8C19] text-white font-bold rounded-lg p-2 w-fit px-3 py-2 ">Get Started</button>
                    </div>
                   
                </div>
                <div className="w-1/2">
                    <Image src={backgroundImage} />
                </div>
            </div>



        </>
    )
}