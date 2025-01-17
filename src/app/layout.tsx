import "@/app/globals.css";
import { NavigationMenuDemo } from "@/components/navbar";

export default function Layout({}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Next.js App</title>
      </head>
      <body>
        <NavigationMenuDemo />
      </body>
    </html>
  );
}
