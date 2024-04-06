"use client";
import Link from "next/link"
import { useState,useRef } from "react";
import { useRouter } from "next/navigation";

export default function SignupForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const formRef = useRef(null);
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("All fields are necessary");
            return;
        }
        try {

            const resUserExists = await fetch('api/userExists', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            })


            const { user } = await resUserExists.json();

            if (user) {
                setError("User already exists");
                return;
            }
            const res = await fetch('api/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                }),
            });

            if (res.ok) {
                formRef.current.reset();
                router.push("/")
            } else {
               
                console.log("User registration failed.")
            }
        } catch (error) {
            console.log("Error during registration:", error)
        }

    }

    console.log("Name:", name);
    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-blue-400">
                <h1 className="text-xl font-bold my-4">Sign Up</h1>
                <form ref={formRef} className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button className="bg-blue-600 text-white font-bold cursor-pointer px-6 py-2" >Sign Up</button>
                    {error && (
                        <div className="bg-red-500 text-white w-fit text-sm px-3 py-2 rounded-md mt-2">{error}</div>
                    )
                    }

                    <Link className="text-sm mt-3 text-right" href={"/"}>Already have an account? <span>Login</span></Link>
                </form>
            </div>
        </div>
    )
}