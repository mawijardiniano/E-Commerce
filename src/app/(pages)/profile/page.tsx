"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import AppSidebar from "@/components/myProfileSidebar";
import { Input } from "@/components/ui/input";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface UserData {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  birthday: string;
  gender: string;
}

export default function Page() {
  const [currentView, setCurrentView] = useState("profile");
  const [userLogged, setUserLogged] = useState<UserData | null>(null);
  const [formData, setFormData] = useState<UserData>({
    id: "",
    name: "",
    email: "",
    phoneNumber: "",
    birthday: "",
    gender: "",
  });

  const LOGGED_USER = "http://localhost:5000/api/getLogged";
  const UPDATE_USER = (userId: string) =>
    `http://localhost:5000/api/users/${userId}`;

  useEffect(() => {
    const cachedUser = localStorage.getItem("cachedUser");
    if (cachedUser) {
      const parsedUser = JSON.parse(cachedUser);
      setUserLogged(parsedUser);
      setFormData(parsedUser);
    }

    const fetchLoggedUser = async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        try {
          const response = await axios.get(LOGGED_USER, {
            headers: { Authorization: `Bearer ${token}` },
          });
          console.log(response.data)
          setUserLogged(response.data);
          setFormData(response.data);

          localStorage.setItem("cachedUser", JSON.stringify(response.data));
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchLoggedUser();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date: Date) => {
    const formattedDate = date.toISOString().split("T")[0];
    setFormData({ ...formData, birthday: formattedDate });
  };

  const handleSubmit = async () => {
    if (!userLogged) return;

    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.put(
        UPDATE_USER(userLogged.id),
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("User updated:", response.data);
      alert("Profile updated successfully!");

      localStorage.setItem(
        "cachedUser",
        JSON.stringify(response.data.updatedData)
      );
      setUserLogged(response.data.updatedData);
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update profile.");
    }
  };

  const renderView = () => {
    switch (currentView) {
      case "profile":
        return (
          <div className="bg-slate-50 h-screen">
            <h2 className="font-medium text-2xl p-6">My Profile</h2>
            <div className="grid grid-cols-2 gap-2 items-center px-10">
              <div>
                <h1 className="font-medium mb-1">Fullname</h1>
                <Input
                  className="w-96"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <h1 className="font-medium mb-1">Email</h1>
                <Input
                  className="w-96"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <h1 className="font-medium mb-1">Phone Number</h1>
                <Input
                  className="w-96"
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div>
                <h1 className="font-medium mb-1">Birthday</h1>

                <DatePicker
                  className="w-96 border p-1  rounded-md "
                  selected={
                    formData.birthday ? new Date(formData.birthday) : null
                  }
                  onChange={handleDateChange}
                  dateFormat="MMMM dd, yyyy"
                  placeholderText="Select your birthday"
                />
              </div>
              <div>
                <h1 className="font-medium mb-1">Gender</h1>
                <Input
                  className="w-96"
                  placeholder="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                />
              </div>
              <section className="">
                <button
                  onClick={handleSubmit}
                  className="bg-black text-white py-2 px-4 rounded-md"
                >
                  Save Changes
                </button>
              </section>
            </div>
          </div>
        );
      case "address":
        return <div>Settings Content</div>;
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <header>
        <Navbar />
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 border-r">
          <AppSidebar onMenuClick={setCurrentView} />
        </aside>
        <div className="flex-grow overflow-hidden">{renderView()}</div>
      </div>
    </div>
  );
}
