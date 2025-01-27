"use client";
import CarouselOffers from "@/components/carousel";
import Navbar from "@/components/navbar";
import GoogleSignIn from "@/components/googleSignIn";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductInterface from "@/interfaces/ProductInterface";
import CategoriesCarousel from "@/components/categoriesCarousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image1 from "@/assets/you.png";
import Image from "next/image";

export default function Dashboard() {
  const [loggedUser, setLoggedUser] = useState("");
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
        <Navbar />
      </header>
      <section className="flex items-center justify-center py-4">
        <CarouselOffers />
      </section>
      <section>
        <div>
          <p className="text-gray-400 text-lg font-medium px-8 ">Categories</p>
          <div className="flex py-4">
            <CategoriesCarousel />
          </div>
        </div>
      </section>
      <section>
        <div className="bg-gray-300">
          <p>Daily Discovery</p>
          <div className="flex flex-row px-8 gap-2">
            {product.length > 0 ? (
              product.map((products, index) => (
                <Card key={index} className="w-64 h-64">
                  <CardHeader>
                    <CardTitle>
                      <Image
                        src={Image1}
                        alt="Public Folder Image"
                        width={300}
                        height={100}
                        className="rounded-lg"
                      />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>{products.name}</CardContent>
                  <CardFooter>
                    <p>{products.price}</p>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <p>No product available</p>
            )}
          </div>

          <p>Random Items</p>
        </div>
      </section>
    </div>
  );
}
