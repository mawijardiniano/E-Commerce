import { ReactNode } from "react";
import Link from "next/link";
import "@/app/globals.css";
import Navbar from "../components/navbar";
import Dashboard from "@/app/(pages)/dashboard/page";
import Login from "@/app/(pages)/authentication/login/page"
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>E-Commerce</title>
      </head>
      <body>
        <main>
        <Login/>
        </main>
      </body>
    </html>
  );
};

export default Layout;
