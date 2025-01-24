"use client";
import CarouselOffers from "@/components/carousel";
import Navbar from "@/components/navbar"
import GoogleSignIn from "@/components/googleSignIn";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductInterface from "@/interfaces/ProductInterface";
import CategoriesCarousel from "@/components/categoriesCarousel";
export default function Dashboard() {
  const [loggedUser, setLoggedUser] = useState("")
  const [product, setProduct] = useState<ProductInterface[]>([]);

  const FetchProductAPI = "http://localhost:5000/api/products/fetch-product";

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get<ProductInterface[]>(FetchProductAPI);
      console.log("all product", response.data);
      setProduct(response.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div>
      <header>
        <Navbar/>
      </header>
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

          {product.length > 0 ? (
            product.map((products, index) => (
              <div key={index}>
                <h3>{products.name}</h3>
                <p>{products.price}</p>
                <p>{products.category}</p>
                <p></p>
              </div>
            ))
          ) : (
            <p>No product available</p>
          )}
          <p>Random Items</p>
        </div>
      </section>
    </div>
  );
}
