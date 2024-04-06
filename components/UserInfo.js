"use client";
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';


export default function UserInfo() {
    const router =useRouter();

    const {data:session}=useSession();


    const handleSignOut = async () => {
        await signOut({
            redirect: false, 
        });
        router.push('/'); 
    };
    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6 ">User
                <div>
                    Name: <span className="font-bold">{session?.user?.name}</span>
                </div>
                <div>
                    Email: <span className="font-bold">{session?.user.email}</span>
                </div>
                <button onClick={handleSignOut} className="bg-red-500 text-white font-bold w-fit px-6 py-2 rounded-lg">Logout</button>
            </div>
        </div>
    )
}