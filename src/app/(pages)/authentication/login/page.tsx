"use client";

import Logo from "@/assets/E-Commerce.jpg";
import axios from "axios";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import GoogleSignIn from "@/components/googleSignIn";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ManualLoginAuth } from "@/interfaces/manualAuthInterface";
import React, { useState } from "react";
export default function Page() {
  const LOGIN_API = "http://localhost:5000/api/login";
  const router = useRouter();

  const [formData, setFormData] = useState<ManualLoginAuth>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post<ManualLoginAuth>(LOGIN_API, formData);

      console.log("Response from backend:", response.data);

      if (response.data && response.data.data) {
        const { token, userId, name, email } = response.data.data;
        if (!token || !userId) {
          console.error("Token or user data is missing");
          return;
        }

        localStorage.setItem("authToken", token);
        localStorage.setItem("user", JSON.stringify({ userId, name, email }));

        console.log("Login successful, token and user data stored:", {
          token,
          user: { userId, name, email },
        });

        router.push("/dashboard");
      } else {
        console.error("Unexpected response format:", response.data);
      }
    } catch (error) {
      console.error(
        "Login failed:",
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <div className="flex flex-row">
      <div className="w-1/2">
        <Image src={Logo} alt="E-Commerce Logo" layout="intrinsic" />
      </div>
      <div className="w-1/2 flex justify-center flex-col px-40">
        <div className="flex justify-center flex-col">
          <h3 className="text-3xl font-medium">Welcome to E-Commerce</h3>
          <div className="space-y-2 py-4">
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
            <Input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-end w-full items-end py-2">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link href="/authentication/signup">Sign Up</Link>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={handleLogin}
            className="bg-orange-400 text-white py-2 w-full"
          >
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
