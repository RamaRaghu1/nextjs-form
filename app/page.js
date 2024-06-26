
import { getServerSession } from "next-auth";
import {redirect} from "next/navigation"
import { authOptions } from "./api/auth/[...nextauth]/route";
import HomePage from "../components/Homepage";
// import Head from "next/head";
import NavBar from "../components/Navbar";


export default async function Home() {
  const session=await getServerSession(authOptions);
  if(session) redirect('/dashboard')
  return (
<>

   <main>
    <HomePage/>
   </main>

   </>
  );
}
