import * as React from "react";

export default function CarouselCategory() {
  const categories = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
    "Category 7",
    "Category 8",
    "Category 9",
    "Category 10",
    "Category 11",
    "Category 12",
    "Category 13",
    "Category 14",
    "Category 15",
    "Category 16",
    "Category 17",
    "Category 18",
    "Category 19",
    "Category 20",
  ];

  return (

    <div className="grid xs:grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 items-center justify-center w-full px-8">
      {categories.map((category, index) => (
        <div key={index} className="">
          <div className="justify-center sm:py-10 md:py-12 py-14 bg-white border flex">
            {category}
          </div>
        </div>
      ))}
    </div>
  );
}
