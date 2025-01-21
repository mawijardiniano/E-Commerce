"use client";

import React, { useState } from "react";
import Link from "next/link";
import GoogleSignIn from "./googleSignIn";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { FaReact } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function NavigationMenuDemo() {
  const [name, setName] = useState<string>("Mawi Jardiniano");
  return (
    <div className="flex flex-row justify-between w-full items-center px-4 py-4 border ">
      <div className="md:text-xl font-bold">E-Commerce</div>
      <div className="flex flex-row items-center md:gap-10">
        <Input className="w-24 md:w-50" />
        <FaCartShopping/>
        <Menubar className="border-0">
        <GoogleSignIn/>
          <MenubarMenu>
            <MenubarTrigger className="md:text-lg">{name}</MenubarTrigger>
            <MenubarContent>
              <MenubarSeparator />
              <MenubarItem>My Profile</MenubarItem>
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

