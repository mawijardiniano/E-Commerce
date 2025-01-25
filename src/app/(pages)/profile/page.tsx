import React from "react";
import Navbar from "@/components/navbar";
import MyProfileSidebar from "@/components/myProfileSidebar";
export default function Page() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <aside className="">
        <MyProfileSidebar />
      </aside>
    </div>
  );
}
