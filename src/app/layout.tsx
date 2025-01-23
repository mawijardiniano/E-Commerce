import { ReactNode } from "react";
import "@/app/globals.css";

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

        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
