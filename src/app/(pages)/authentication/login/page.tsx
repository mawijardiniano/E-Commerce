'use client'

import Logo from "@/assets/E-Commerce.jpg";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import GoogleSignIn from "@/components/googleSignIn";
import { useRouter } from 'next/navigation'
import Link from 'next/link';
export default function Page() {
    const router = useRouter()


    const handleLogin = () => {
        router.push("/dashboard")
    }
    const handleSignup = () => {
        router.push("/signup")
    }
  return (
    <div className="flex flex-row">
      <div className="w-1/2">
        <Image src={Logo} alt="E-Commerce Logo" layout="intrinsic" />
      </div>
      <div className="w-1/2 flex justify-center flex-col px-40">
        <div className="flex justify-center flex-col">
          <h3 className="text-3xl font-medium">Welcome to E-Commerce</h3>
          <div className="py-4">
            <Input placeholder="Email" />
            <Input placeholder="Password" />
          </div>
        </div>
        <div className="flex justify-end w-full items-end py-2">
        <p>Don't have an account? <Link href="/">Sign Up</Link></p>
        </div>
        <div className="flex items-center justify-center">
          <button onClick={handleLogin} className="bg-orange-400 text-white py-2 w-full">
            Login
          </button>
        </div>

        <div className="flex items-center mt-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="py-4 w-full flex items-center justify-center">
          <GoogleSignIn />
        </div>
      </div>
    </div>
  );
}
