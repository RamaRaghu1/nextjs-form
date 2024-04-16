import email from "../public/assets/email.png"
import phone from "../public/assets/phone.png"
import location from "../public/assets/location.png"
import Image from "next/image";


export default function Contact() {


    const branchDetails = [
        {
            id: 1,
            city: "Chennai",
            address: "20/14, Kalaivanar Street, Jafferkhanpet, Chennai - 600083"
        },
        {
            id: 2,
            city: "Salem",
            address: "Sairam complex, Veeranganur main road, Thalaivasal. Pincode - 636112"
        },
        {
            id: 3,
            city: "Tirunelveli",
            address: "No 12, Shanthi complex, Vasanth nagar, Pincode - 627005"
        },
        {
            id: 4,
            city: "Trichy",

            address: "No 76-O, Jothi complex, Thillai nagar, Pincode - 620018."
        }
    ];
    const contactDetails = [
        {
            id: 1,
            img: phone,
            heading: "Give us a call",
            info: "+91 7092774077",
        },
        {
            id: 2,
            img: email,
            heading: "Write to us",
            info: "support@kairaaacademy.com",
        },
        {
            id: 1,
            img: location,
            heading: "Visit us in Coimbatore @",
            info: "131, 2nd floor, DB Road, RS Puram, Tamilnadu, Coimbatore 641002",
        }
    ]


    return (
        <>
            <div className="flex justify-around md:mx-8 m-4 flex-col md:flex-row">

                {/* contact us ++++++ chennai office details */}
                <div className="flex flex-col justify-around items-center md:w-3/6 w-full p-4 m-4">
                    <h1 className="text-2xl font-bold text-[#0874DD] text-center">Contact Us</h1>
                    <p className="line-clamp-3 p-4 text-[#15265D] font-medium">Let us know your queries, feedbacks and enquiries. We are here to support you 24/7.</p>
                  

                    <div className=" ">
                        {contactDetails && contactDetails.map((dt, i) => {
                            return (
                                <>
                                <div key={i} className="flex gap-4 p-4 ">
                                    <div>

                                        <Image src={dt.img} className="w-10 h-10 md:h-13 md:w-13" />
                                    </div>
                                    <div >
                                        <p className="text-slate-400 font-semibold">{dt.heading}</p>
                                        <p className="font-bold text-[#15265D]">{dt.info}</p>
                                    </div>

                                </div>
                                <hr/>
                                </>
                            )
                        })

                        }
                    </div>

                </div>
{/* form */}
                <div className=" md:mx-8 p-4  md:w-3/6 w-full ">
                    <div className="md:w-5/6 w-full p-8 shadow-lg rounded-lg items-center g-4 justify-center">
                        <h2 className="text-2xl font-bold ">Say <span className="text-[#0874DD]">Hello !</span></h2>
                        <p className="py-4">Feel free to stop by and say hi !</p>
                        <form className="flex flex-col">

                            <label>
                                Name
                            </label>
                            <input type="text" />

                            <label>
                                E-mail Id
                            </label>
                            <input type="email" />

                            <label>
                                Contact Number
                            </label>
                            <input type="tel" />

                            <label>
                                Message
                            </label>
                            <textarea rows="4" cols="40" className="border border-blue-200 w-[300px]"></textarea>
                            <button className="rounded-xl bg-[#FF8C19] text-white font-bold w-fit m-auto my-4 px-3 py-2">Submit</button>
                        </form>

                    </div>
                </div>
            </div>

            <div className="text-[#15265D] m-12">
                <h2 className="text-2xl font-bold text-center ">OUR OFFICES AROUND<span className="text-[#FF8C19]"> TAMIL NADU</span></h2>
                <p className="md:text-xl text-lg font-medium line-clamp-3 p-4 text-center">Embark on an exciting journey with Kairaa Blockchain Academy, nestled in dynamic cities across Tamil Nadu!</p>

                <div className="flex flex-col md:flex-row items-center justify-center  " >
{ branchDetails.map((details, i)=>{
    return (
      
            <div key={details.id} className="w-64 h-48 justify-center bg-blue-100 hover:bg-[#0874DD] hover:text-white p-4 m-4 flex flex-col rounded-lg text-center ">
            <h3 className="font-bold ">{details.city}</h3>
            <p className="font-medium">{details.address}</p>
            </div>
      
    )
})}
                </div>
            </div>
        </>
    )
}