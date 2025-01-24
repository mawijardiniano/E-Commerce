"use client";
import axios from "axios";
import React, { useState } from "react";
import Logo from "@/assets/E-Commerce.jpg";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import GoogleSignIn from "@/components/googleSignIn";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ManualAuth from "@/interfaces/manualAuthInterface";

export default function Page() {
  const SIGNUP_API = "http://localhost:5000/api/signup";
  const router = useRouter()
  const [formData, setFormData] = useState<ManualAuth>({
    name: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post<ManualAuth>(SIGNUP_API, formData);
      console.log(response);
      router.push("/authentication/login")
      alert("Signup Successfully");
    } catch (error) {}
  };

  return (
    <div className="flex flex-row">
      <div className="w-1/2">
        <Image src={Logo} alt="E-Commerce Logo" layout="intrinsic" />
      </div>
      <div className="w-1/2 flex justify-center flex-col px-40">
        <div className="flex justify-center flex-col">
          <h3 className="text-3xl font-medium">Sign Up</h3>
          <div>
            <form className="py-4 space-y-2">
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
              />
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
              <Input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
              />
              <Input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
              />
            </form>
          </div>
        </div>
        <div className="flex justify-end w-full items-end py-2">
          <p className="text-sm">
            Already have an account?{" "}
            <Link href="/authentication/login">Login</Link>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button onClick={handleSignup} className="bg-orange-400 text-white py-2 w-full">
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
