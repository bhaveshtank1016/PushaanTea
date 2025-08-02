import React from "react";
import { Home, Building2, Factory, Landmark } from "lucide-react";
import leftTrees from "../../src/assets/home/home1.png";
import rightTrees from "../assets/home/home2.png";
import leaf from "../assets/home/leaf.png";

const industries = [
  {
    icon: <Home size={40} className="text-yellow-600" />,
    title: "Residential",
    description:
      "Customized fabrication solutions for homes, apartments, and private villas.",
  },
  {
    icon: <Building2 size={40} className="text-yellow-600" />,
    title: "Commercial",
    description:
      "Expertise in glass facades, office partitions, and shopfront fittings.",
  },
  {
    icon: <Factory size={40} className="text-yellow-600" />,
    title: "Industrial",
    description:
      "Reliable metalwork for warehouses, plants, and heavy-duty industrial structures.",
  },
  {
    icon: <Landmark size={40} className="text-yellow-600" />,
    title: "Government Contracts",
    description:
      "Experience in public infrastructure and government-certified projects.",
  },
];

const IndustriesWeServe = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-400 text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12 relative">
          <div className="flex items-center justify-between w-full max-w-6xl px-4">
            <img
              src={leftTrees}
              alt="Left Trees"
              className="h-10 md:h-12 lg:h-18 object-contain"
            />

            <div className="text-center flex-1 px-2">
              <h4 className="uppercase tracking-wider text-sm md:text-xl text-blue-800">
                Industries We <span className="text-yellow-600">Serve</span>
              </h4>
              <h1 className="text-md sm:text-2xl md:text-xl font-serif mt-1 text-blue-800">
                Our versatile expertise spans across residential, commercial,
                industrial, and public sector projects.
              </h1>
              <img
                src={leaf}
                alt="Leaf"
                className="mx-auto mt-2 h-3 md:h-4 object-contain"
              />
            </div>

            <img
              src={rightTrees}
              alt="Right Trees"
              className="h-8 md:h-12 lg:h-18 object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {industries.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#78818f] rounded-2xl p-6 shadow-2xl hover:shadow-2xl  hover:-translate-y-1 hover:shadow-cyan-600 transition duration-300 text-center sm:text-left"
            >
              <div className="flex justify-center sm:justify-start mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 ">{item.title}</h3>
              <p className="text-sm ">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16"></div>
    </section>
  );
};

export default IndustriesWeServe;
