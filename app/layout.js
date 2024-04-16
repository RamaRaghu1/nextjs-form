import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./Providers";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blockchain Courses & Certifications | Kairaa Blockchain Academy",
  description: "Upskill for the future! Get certified in blockchain and unlock new career opportunities with Kairaa Blockchain Academy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <AuthProvider>
        <NavBar/>
       {children}
        <Footer/>
        </AuthProvider>

        </body>
    </html>
  );
}
