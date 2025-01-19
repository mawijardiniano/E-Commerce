import { ReactNode } from "react";
import Link from "next/link";
import "@/app/globals.css";
import Navbar from "../components/navbar";
import CarouselOffers from "@/components/carousel";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Next.js App</title>
      </head>
      <body>
        <header>
          <Navbar />
        </header>

        <main>
          <section className="flex items-center justify-center py-4">
          <CarouselOffers />
          </section>
        </main>
      </body>
    </html>
  );
};

export default Layout;
