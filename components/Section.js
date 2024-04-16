import Image from "next/image";
import img1 from "../public/assets/expert-guidance.png"
import img2 from "../public/assets/comprehensive-curriculum.png"
import img3 from "../public/assets/certificate-on-completion.png"
import img4 from "../public/assets/easy-convenient-booking-procedure.png"
import img5 from "../public/assets/unmatched-content-depth.png"
import img6 from "../public/assets/structured-learning-path.png"

export default function Section(){


    const data=[
        {
            id:1,
       img:img1,
            heading:"Expert Guidance",
            para:"Learn everything from the best in the industry experts."
        },
        {
            id:2,
            img:img2,
            heading:"Comprehensive curriculum",
            para:"Make your way through with our latest and comprehensive curriculum."
        },
        {
            id:3,
            img:img3,
            heading:"Certificate On completion",
            para:"After completing the course, you'll receive a certificate.",
    
        },
        {
            id:4,
            img:img4,
            heading:"Easy, convenient booking procedure",
            para:"We provide a trusted and intuitive platform for users, of all experience levels, to trade how they want. Whether you’re a"
        },
        {
            id:5,
            img:img5,
            heading:"Unmatched Content Depth",
            para:"Our trading charts provide a comprehensive picture of the live exchange rate, assets, and crypto currency price"
        },
        {
            id:6,
            img:img6,
            heading:"Structured Learning Path",
            para:"Send and receive crypto coins globally with kairaa and experience world-class exchange at the least price.",
        },
      
    ]



    return(
        <div className='py-4'>
        <h2 className='text-center font-bold md:text-3xl text-2xl p-2'>Why choose us?</h2>

        <p  className='text-center font-medium md:text-xl text-lg px-8'>At Kairaa Blockchain Academy, we stand out for our commitment to providing an enriching learning experience through our extensive array of educational materials. </p>
        <div className='text-[#1c2a59] text-sm flex flex-row flex-wrap justify-between px-12 '>
      {data.length >0 &&  data.map((dt, id)=>{
      return  <div key={id} className='md:w-80 h-[200px] rounded-xl p-4 bg-white space-y-3 m-8 w-full shadow-md hover:bg-[#EAF9FF] transform transition duration-500 hover:scale-105 md:hover:scale-110'>
      <div className="flex gap-4 py-2 ">
      <Image src={dt.img} width={50} height={50} alt="Picture of the author"/>
        <p className='text-lg font-bold'>{dt.heading}</p>
      </div>
        <p>{dt.para}</p>
        </div>
       
      })}
       </div>
    </div>
    )
}