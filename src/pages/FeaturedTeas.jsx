import React from "react";
import leftTrees from "../assets/home/home1.png";
import rightTrees from "../assets/home/home2.png";
import leaf from "../assets/home/leaf.png";
import tea1 from "../assets/tea/tea6.jpg";
import tea2 from "../assets/tea/tea4.avif";
import tea3 from "../assets/tea/tea5.jpg";

const teas = [
  {
    id: 1,
    name: "Jasmine Black Tea",
    price: "$13.00",
    image:tea1,
       options: ["Tin 1.06oz (30g)", "Refill Pouch 3.53oz (100g)","Sample"],
  },
  {
    id: 2,
    name: "Earl Grey Tea",
    price: "$13.00",
     image:tea2,
    options: ["Tin 1.06oz (30g)", "Refill Pouch 3.53oz (100g)", "Sample"],
  },
  {
    id: 3,
    name: "Darjeeling Golden Summer Muscatel Tea",
    price: "$14.00",
    image:tea3,
    options: ["Tin 1.06oz (30g)", "Refill Pouch 3.52oz (100g)", "Sample"],
  },
];

const FeaturedTeas = () => {
  return (
    <section className="py-16 bg-gray-400 text-black px-4 text-center">
      <div className="flex flex-col items-center py-10 relative">
        <div className="flex items-center justify-between w-full max-w-6xl px-4">
          <img src={leftTrees} alt="Left Trees" className="h-12 md:h-16" />

          <div className="text-center flex-1">
            <h4 className="uppercase tracking-wider text-sm text-blue-800">
              Featured Teas
            </h4>
            <h1 className="text-2xl md:text-3xl font-serif mt-2 text-blue-800">
              Bestselling Signature Selections
            </h1>
            <img src={leaf} alt="Leaf" className="mx-auto mt-2 h-4" />
          </div>

          <img src={rightTrees} alt="Right Trees" className="h-12 md:h-16" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {teas.map((tea) => (
          <div key={tea.id} className="w-full max-w-sm">
            <img src={tea.image} alt={tea.name} className="rounded-2xl shadow-lg" />
            <h3 className="mt-4 text-xl font-serif">{tea.name}</h3>
            <p className="text-gray-600">{tea.price}</p>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {tea.options.map((opt, i) => (
                <button
                  key={i}
                  className="px-3 py-1 bg-gray-100 border border-blue-700 text-blue-700 rounded-full text-sm hover:bg-blue-700 hover:text-white transition"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="mt-10 px-6 py-2 border border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition">
        Show All
      </button>
    </section>
  );
};

export default FeaturedTeas;
