import React from "react";
import { CheckCircle, Timer, Award, Hammer } from "lucide-react";
import leftTrees from "../../src/assets/home/home1.png";
import rightTrees from "../assets/home/home2.png";
import leaf from "../assets/home/leaf.png";

const reasons = [
  {
    icon: <Award className="text-indigo-600 w-8 h-8" />,
    title: "10+ Years Experience",
    description:
      "A decade of expertise in fabrication, glazing, and metal works.",
  },
  {
    icon: <Timer className="text-indigo-600 w-8 h-8" />,
    title: "On-Time Delivery",
    description: "We respect your time and always meet our deadlines.",
  },
  {
    icon: <CheckCircle className="text-indigo-600 w-8 h-8" />,
    title: "Certified Welders",
    description:
      "Skilled professionals ensure quality and safety in every job.",
  },
  {
    icon: <Hammer className="text-indigo-600 w-8 h-8" />,
    title: "Tailored Solutions",
    description: "Custom work to match your exact needs and specifications.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about">
      <section className="py-20 bg-[#66656365] text-black px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col items-center mb-12 relative">
            <div className="flex items-center justify-between w-full max-w-6xl px-4">
              <img
                src={leftTrees}
                alt="Left Trees"
                className="h-10 md:h-12 lg:h-18 object-contain"
              />

              <div className="text-center flex-1 px-2">
                <h4 className="uppercase tracking-wider text-sm md:text-xl text-blue-800">
                  Why <span className="text-indigo-600">Choose Us?</span>
                </h4>
                <h1 className="text-md sm:text-2xl md:text-xl font-serif mt-1 text-blue-800">
                  We don’t just build structures, we build trust through
                  consistent performance, high quality, and professional
                  service.
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-15">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="flex bg-[#F5F7FA] p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-orange-700 hover:shadow-xl shadow-lg rounded-xl flex-col items-center text-center"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2 ">{item.title}</h3>
                <p className="text-sm ">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default WhyChooseUs;
