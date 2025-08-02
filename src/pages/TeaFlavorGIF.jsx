import React from "react";
import gif1 from "../assets/video/gif.mp4";
import gif2 from "../assets/video/bb.mp4";
import leftTrees from "../../src/assets/home/home1.png";
import rightTrees from "../assets/home/home2.png";
import leaf from "../assets/home/leaf.png";

const teas = [
  {
    gif: gif1,
    title: "Rose Cardamom",
    subtitle: "Chai",
  },
  {
    gif: gif2,
    title: "Calming Golden",
    subtitle: "Latte",
  },
  {
    gif: gif1,
    title: "Cocoa Chai",
    subtitle: "Tea",
  },
  {
    gif: gif2,
    title: "Ginger Lemongrass",
    subtitle: "Tea",
  },
];

function TeaFlavorGIF() {
  return (
    <div className=" bg-[#66656365] px-4 sm:px-6 md:px-10 py-12">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-12 relative">
        <div className="flex items-center justify-between w-full max-w-6xl px-4">
          <img
            src={leftTrees}
            alt="Left Trees"
            className="h-8 md:h-12 lg:h-16 object-contain"
          />

          <div className="text-center flex-1 px-2">
            <h4 className="uppercase tracking-wider text-xs md:text-sm text-blue-800">
              TEA FLAVOUR
            </h4>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-serif mt-1 text-blue-800">
              Bestselling Signature Selections
            </h1>
            <img src={leaf} alt="Leaf" className="mx-auto mt-2 h-3 md:h-4 object-contain" />
          </div>

          <img
            src={rightTrees}
            alt="Right Trees"
            className="h-8 md:h-12 lg:h-16 object-contain"
          />
        </div>
      </div>

      {/* Tea Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
        {teas.map((tea, index) => (
          <div
            key={index}
            className="w-full max-w-xs rounded-xl overflow-hidden shadow-md hover:shadow-orange-700 hover:shadow-xl transition-shadow duration-300"
          >
            <video
              src={tea.gif}
              autoPlay
              loop
              muted
              className="w-full h-48 sm:h-56 md:h-64 object-cover"
            />
            <div className="bg-[#353523] p-4 text-white">
              <h3 className="text-base sm:text-lg font-semibold">{tea.title}</h3>
              {tea.subtitle && (
                <p className="text-sm text-blue-800 mt-1">{tea.subtitle}</p>
              )}
            </div>
          </div>
        ))}
      </div>
       <div className="flex justify-center mt-10">
        <button className="px-6 py-2 border border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition duration-300">
          Show All
        </button>
      </div>
    
    </div>
  );
}

export default TeaFlavorGIF;
