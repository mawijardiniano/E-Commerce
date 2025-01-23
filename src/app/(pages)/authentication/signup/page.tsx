"use client";

import Logo from "@/assets/E-Commerce.jpg";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import GoogleSignIn from "@/components/googleSignIn";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-row">
      <div className="w-1/2">
        <Image src={Logo} alt="E-Commerce Logo" layout="intrinsic" />
      </div>
      <div className="w-1/2 flex justify-center flex-col px-40">
        <div className="flex justify-center flex-col">
          <h3 className="text-3xl font-medium">Sign Up</h3>
          <div className="py-4 space-y-2">
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Input placeholder="Confirm Password" />
            <Input placeholder="Address" />
            <Input placeholder="Phome Number" />
          </div>
        </div>
        <div className="flex justify-end w-full items-end py-2">
          <p className="text-sm">
            Already have an account?{" "}
            <Link href="/authentication/login">Login</Link>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-orange-400 text-white py-2 w-full">
            Signup
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
