"use client";
import ProductInterface from "@/interfaces/ProductInterface";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image1 from "@/assets/you.png";
import Image from "next/image";

export default function Page() {
  const [product, setProduct] = useState<ProductInterface[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductInterface[]>(
    []
  );
  const [filterCategory, setFilterCategory] = useState("Home Entertainment");

  const FetchProductAPI = "http://localhost:5000/api/products/fetch-product";

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get<ProductInterface[]>(FetchProductAPI);
      console.log("all product", response.data);
      setProduct(response.data);

      const filtered = response.data.filter(
        (product) => product.category === filterCategory
      );
      setFilteredProducts(filtered);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, [filterCategory]);

  return (
    <div>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((products, index) => (
          <Card key={index} className="w-64 h-64">
            <CardHeader>
              <CardTitle>
                <Image
                  src={Image1}
                  alt="Product Image"
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
        <p>No products available in this category.</p>
      )}
    </div>
  );
}
