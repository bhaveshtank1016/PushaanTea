import React from "react";
import gif1 from "../assets/video/gif.mp4";
import gif2 from "../assets/video/bb.mp4";

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
    subtitle: "",
  },
  {
    gif: gif2,
    title: "Ginger Lemongrass",
    subtitle: "Tea",
  },
  {
    gif: gif1,
    title: "Kashmiri Kahwa",
    subtitle: "",
  },
  {
    gif: gif2,
    title: "See The Magic!",
    subtitle: "",
  },
];

function TeaFlavorGIF() {
  return (
    <div className="min-h-screen bg-[#66656365] px-8 py-12">
      <h1 className="text-3xl font-serif text-center mb-15 text-blue-900 mt-10">
      TEA FLAVOUR
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {teas.map((tea, index) => (
          <div
            key={index}
            className="w-60 rounded-xl overflow-hidden shadow-md hover:shadow-orange-700 hover:shadow-xl transition-shadow"
          >
            <video
              src={tea.gif}
              autoPlay
              loop
              muted
              className="w-full h-80 object-cover"
            />
            <div className="bg-[#353523] via-transparent to-transparent p-4 text-white">
              <h3 className="text-lg font-semibold">{tea.title}</h3>
              {tea.subtitle && (
                <p className="text-sm text-blue-800">{tea.subtitle}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeaFlavorGIF;
