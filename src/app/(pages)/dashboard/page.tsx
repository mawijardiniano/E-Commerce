import CarouselOffers from "@/components/carousel";
import Navbar from "@/components/navbar";
import ProductInterface from "@/interfaces/ProductInterface";
import CategoriesCarousel from "@/components/categoriesCarousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image1 from "@/assets/you.png";
import Image from "next/image";

const FetchProductAPI = "http://localhost:5000/api/products/fetch-product";

async function fetchAllProducts(): Promise<ProductInterface[]> {
  try {
    const response = await fetch(FetchProductAPI, { cache: "no-store" }); 
    if (!response.ok) throw new Error("Failed to fetch products");
    return response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function Dashboard() {
  const products = await fetchAllProducts();

  return (
    <div className="bg-slate-50">
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
        <div>
          <p>Daily Discovery</p>
          <div className="flex flex-row px-8 gap-2">
            {products.length > 0 ? (
              products.map((product, index) => (
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
                  <CardContent>{product.name}</CardContent>
                  <CardFooter>
                    <p>{product.price}</p>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <p>No product</p>
            )}
          </div>

          <p>Random Item</p>
        </div>
      </section>
    </div>
  );
}
