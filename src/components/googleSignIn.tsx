"use client";

import React, { useEffect, useState } from "react";
import { auth, googleProvider } from "../app/firebase";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from 'next/navigation'

const GoogleSignIn = ({}) => {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  const handleGoogleSignIn = async () => {
    if (!isClient) return;

    try {
      const result = await signInWithPopup(auth, googleProvider);

      const user = result.user;
      console.log("User Info:", user);
      router.push("/dashboard")
      alert(`Welcome ${user.displayName}!`);

    } catch (error) {
      console.error("Error signing in with Google:", error.message);
      alert("There was an issue signing in with Google. Please try again.");
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <button
      onClick={handleGoogleSignIn}
      className="bg-blue-500 text-white p-2 rounded-sm w-full"
    >
      Sign in with Google
    </button>
  );
};

export default GoogleSignIn;
