"use client";

import React, { useEffect, useState, memo } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import axios from "axios";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { FaCartShopping } from "react-icons/fa6";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

interface UserData {
  name: string;
  email: string;
}

const LOGGED_USER = "http://localhost:5000/api/getLogged";

const Username = memo(() => {
  const [userLogged, setUserLogged] = useState<UserData | null>(null);

  useEffect(() => {
    const cachedUser = localStorage.getItem("cachedUser");
    if (cachedUser) {
      setUserLogged(JSON.parse(cachedUser));
    }

    const fetchLoggedUser = async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        try {
          const response = await axios.get(LOGGED_USER, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUserLogged(response.data);

          localStorage.setItem("cachedUser", JSON.stringify(response.data));
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchLoggedUser();
  }, []);

  return <div>{userLogged?.name}</div>;
});

export default function NavigationMenuDemo() {
  const router = useRouter();
  const handleNavigateToProfile = () => {
    router.push("/profile");
  };

  return (
    <div className="flex flex-row justify-between w-full items-center px-4 py-4 border ">
      <div className="md:text-xl font-bold">E-Commerce</div>
      <div className="flex flex-row items-center md:gap-10">
        <Input className="w-24 md:w-50" />
        <FaCartShopping />
        <Menubar className="border-0">
          <MenubarMenu>
            <MenubarTrigger className="md:text-lg">
              <Username />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarSeparator />
              <MenubarItem onClick={handleNavigateToProfile}>
                My Profile
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>My Purchase</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Logout</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
}
