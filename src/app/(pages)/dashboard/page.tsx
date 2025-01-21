"use client";
import CarouselOffers from "@/components/carousel";
import GoogleSignIn from "@/components/googleSignIn";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoriesCarousel from "@/components/categoriesCarousel";
export default function Dashboard() {
  const FetchProductAPI = "http://localhost:5000/api/products/fetch-product";

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get(FetchProductAPI);
      console.log("all product", response.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div>
      <section className="flex items-center justify-center py-4">
        <CarouselOffers />
      </section>
      <section>
        <div>
          <p className="text-gray-400 text-lg">Categories</p>
          <div className="flex py-4">
            <CategoriesCarousel />
          </div>
        </div>
        <div className="bg-gray-300">
          <p>Daily Discovery</p>
          <p>Random Items</p>
        </div>
      </section>
    </div>
  );
}
