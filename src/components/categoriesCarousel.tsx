import * as React from "react";
import Link from "next/link";
import MenApparel from "@/assets/categoryImages/mens apparel.webp";
import Gadgets from "@/assets/categoryImages/gadgets.webp";
import MobileAccessories from "@/assets/categoryImages/mobile accessories.webp";
import HomeEntertainment from "@/assets/categoryImages/home entertainment.webp";
import HomeLiving from "@/assets/categoryImages/home&living.webp";
import Groceries from "@/assets/categoryImages/groceries.webp";
import Toys from "@/assets/categoryImages/toys.webp";
import PetCare from "@/assets/categoryImages/petcare.webp";
import Audios from "@/assets/categoryImages/audios.webp";
import Sports from "@/assets/categoryImages/sports.webp";
import WomanApparel from "@/assets/categoryImages/women apparel.webp";
import HealthCare from "@/assets/categoryImages/health&personal care.webp";
import Makeup from "@/assets/categoryImages/makeup&fragrance.webp";
import HomeAppliances from "@/assets/categoryImages/home appliances.webp";
import LaptopComputer from "@/assets/categoryImages/laptops&computers.webp";
import Cameras from "@/assets/categoryImages/cameras.webp";
import MensAccessories from "@/assets/categoryImages/mens accessories.webp";
import MensShoes from "@/assets/categoryImages/mens shoes.webp";
import Motors from "@/assets/categoryImages/motors.webp";
import Gaming from "@/assets/categoryImages/gaming.webp";

interface Category {
  id: string;
  name: string;
  image: string;
  route: string;
}
export default function CarouselCategory() {
  const categories: Category[] = [
    { id: "men-apparel", name: "Mens Apparel", image: MenApparel.src, route: "/dashboard/categories/men-apparel" },
    { id: "gadgets", name: "Gadgets", image: Gadgets.src, route: "/dashboard/categories/gadget" },
    { id: "mobile-accessories", name: "Mobile Accessories", image: MobileAccessories.src, route: "/dashboard/categories/mobile-accessories" },
    { id: "home-entertainment", name: "Home Entertainment", image: HomeEntertainment.src, route: "/dashboard/categories/home-entertainment" },
    { id: "home-living", name: "Home Living", image: HomeLiving.src, route: "/dashboard/categories/home-living" },
    { id: "groceries", name: "Groceries", image: Groceries.src, route: "/dashboard/categories/groceries" },
    { id: "toys", name: "Toys", image: Toys.src, route: "/dashboard/categories/toys" },
    { id: "pet-care", name: "Petcare", image: PetCare.src, route: "/dashboard/categories/pet-care" },
    { id: "audios", name: "Audios", image: Audios.src, route: "/dashboard/categories/audios" },
    { id: "sports", name: "Sports", image: Sports.src, route: "/dashboard/categories/sports" },
    { id: "woman-apparel", name: "Women Apparel", image: WomanApparel.src, route: "/dashboard/categories/woman-apparel" },
    { id: "health-care", name: "Health Care", image: HealthCare.src, route: "/dashboard/categories/health-care" },
    { id: "makeup", name: "Makeup", image: Makeup.src, route: "/dashboard/categories/makeup" },
    { id: "home-appliances", name: "Home Appliances", image: HomeAppliances.src, route: "/dashboard/categories/home-appliances" },
    { id: "laptop-computer", name: "Laptop Computer", image: LaptopComputer.src, route: "/dashboard/categories/laptop-computer" },
    { id: "cameras", name: "Cameras", image: Cameras.src, route: "/dashboard/categories/cameras" },
    { id: "mens-accessories", name: "Mens Accessories", image: MensAccessories.src, route: "/dashboard/categories/mens-accessories" },
    { id: "mens-shoes", name: "Mens shoes", image: MensShoes.src, route: "/dashboard/categories/mens-shoes" },
    { id: "motors", name: "Motors", image: Motors.src, route: "/dashboard/categories/motors" },
    { id: "gaming", name: "Gaming", image: Gaming.src, route: "/dashboard/categories/gaming" },
  ];
  
  return (
    <div className="grid xs:grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 items-center justify-center w-full px-8">
      {categories.map((category, index) => (
         <Link href={category.route || "#"} key={category.id}>
        <div key={index} className="">
          <div className="justify-center sm:py-10 md:py-12 py-14 bg-white border flex flex-col items-center">
            <img
              src={category.image}
              className="w-16 h-16 object-cover mb-2 rounded"
            />
            <p className="font-medium text-sm text-center flex-wrap">{category.name}</p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
}
