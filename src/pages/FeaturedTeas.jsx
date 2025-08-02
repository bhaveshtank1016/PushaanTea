import React from "react";
import leftTrees from "../assets/home/home1.png";
import rightTrees from "../assets/home/home2.png";
import leaf from "../assets/home/leaf.png";
import CompanyAbout from "./CompanyAbout";

const teas = [
  {
    id: 1,
    name: '"Constant Comment"® Black Tea',
    count: "20 Count (Pack of 6)",
    totalBags: "120 Total Tea Bags",
    price: "$20.95",
    rating: 4.7,
    reviews: 58,
    image:
      "https://tealeavz.com/cdn/shop/articles/what-does-black-tea-taste-like.jpg?v=1659743106",
  },
  {
    id: 2,
    name: "Lemon Ginger Plus Probiotics Herbal Tea",
    count: "18 Count (Pack of 6)",
    totalBags: "108 Total Tea Bags",
    price: "$20.95",
    rating: 4.3,
    reviews: 37,
    image: "https://static.toiimg.com/photo/69385334.cms",
  },
  {
    id: 3,
    name: "Ginger Honey plus Zinc Herbal Tea",
    count: "18 Count (Pack of 6)",
    totalBags: "108 Total Tea Bags",
    price: "$20.95",
    rating: 4.6,
    reviews: 36,
    image:
      "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-114984933/114984933.jpg",
  },
  {
    id: 4,
    name: "Green Tea",
    count: "20 Count (Pack of 6)",
    totalBags: "120 Total Tea Bags",
    price: "$20.95",
    rating: 4.8,
    reviews: 10,
    image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/8468/Tea.jpg",
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push("★");
  }
  if (halfStar) stars.push("☆");

  return <span className="text-yellow-500">{stars.join("")}</span>;
};

const FeaturedTeas = () => {
  return (
    <>
    <section className="py-16 bg-[#66656365]  text-black px-4 md:px-10">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-12 relative">
        <div className="flex items-center justify-between w-full max-w-6xl px-4">
          <img src={leftTrees} alt="Left Trees" className="h-10 md:h-14 lg:h-16" />

          <div className="text-center flex-1">
            <h4 className="uppercase tracking-wider text-xs md:text-sm text-blue-800">
              Featured Teas
            </h4>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-serif mt-2 text-blue-800">
              Bestselling Signature Selections
            </h1>
            <img src={leaf} alt="Leaf" className="mx-auto mt-2 h-3 md:h-4" />
          </div>

          <img src={rightTrees} alt="Right Trees" className="h-10 md:h-14 lg:h-16" />
        </div>
      </div>

      {/* Tea Grid */}
      <div className="grid  grid-cols-1  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-6 max-w-7xl mx-auto">
        {teas.map((tea) => (
          <div
            key={tea.id}
            className="border rounded-lg p-4 bg-[#9aa3b6] text-center  shadow-md hover:shadow-xl hover:shadow-cyan-600 transition duration-300"
          >
            <img
              src={tea.image}
              alt={tea.name}
              className="h-32 md:h-40 w-full object-contain mb-4"
            />
            <h3 className="text-sm md:text-base font-semibold mb-1">{tea.name}</h3>
            <p className="text-xs ">{tea.count}</p>
            <p className="text-xs  mb-2">{tea.totalBags}</p>
            <p className="text-base font-bold mb-2 text-gray-800">{tea.price}</p>
            <div className="flex justify-center items-center gap-1 text-sm">
              <StarRating rating={tea.rating} />
              <span className="text-gray-500">({tea.reviews})</span>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button className="px-6 py-2 border border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition duration-300">
          Show All
        </button>
      </div>
    </section>
    <CompanyAbout/>
    </>
  );
};

export default FeaturedTeas;
