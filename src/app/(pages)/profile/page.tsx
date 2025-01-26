"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import AppSidebar from "@/components/myProfileSidebar";
import { Input } from "@/components/ui/input";

export default function Page() {
  const [currentView, setCurrentView] = useState("profile");

  const renderView = () => {
    switch (currentView) {
      case "profile":
        return (
          <div>
            <h2 className="font-medium text-2xl p-6">My Profile</h2>
            <div className="grid grid-cols-2 gap-2 items-center px-10">
              <div>
                <h1 className="font-medium mb-1">Fullname</h1>
                <Input className="w-96" placeholder="Name" />
              </div>
              <div>
                <h1 className="font-medium mb-1">Email</h1>
                <Input className="w-96" placeholder="Email" />
              </div>
              <div>
                <h1 className="font-medium mb-1">Phone Number</h1>
                <Input className="w-96" placeholder="Phone Number" />
              </div>
              <div>
                <h1 className="font-medium mb-1">Birthday</h1>
                <Input className="w-96" placeholder="Birthday" />
              </div>
              <div>
                <h1 className="font-medium mb-1">Gender</h1>
                <Input className="w-96" placeholder="Gender" />
              </div>
            </div>
          </div>
        );
      case "address":
        return <div>Settings Content</div>;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="">
        <Navbar />
      </header>

      <div className="flex flex-1">
        <aside className="w-64  border-r">
          <AppSidebar onMenuClick={setCurrentView} />
        </aside>
        <main className="flex-grow p-4">{renderView()}</main>
      </div>
    </div>
  );
}
