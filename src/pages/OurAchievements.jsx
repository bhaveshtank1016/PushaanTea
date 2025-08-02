import React, { useEffect, useState } from "react";
import { FaBriefcase, FaSmile, FaUsers,FaAward } from "react-icons/fa";
import ProjectGallery from './ProjectGallery';
import leftTrees from "../../src/assets/home/home1.png";
import rightTrees from "../assets/home/home2.png";
import leaf from "../assets/home/leaf.png";

const stats = [
  {
    icon: <FaBriefcase size={30} className="text-[#1c2e94]" />,
    label: "Projects Completed",
    value: 100,
    suffix: "+",
  },
  {
    icon: <FaSmile size={30} className="text-[#39c26d]" />,
    label: "Client Satisfaction",
    value: 95,
    suffix: "%",
  },
  {
    icon: <FaUsers size={30} className="text-[#f1862d]" />,
    label: "Skilled Fabricators",
    value: 20,
    suffix: "+",
  },
  {
    icon: <FaAward size={30} className="text-[#f3349a]" />,
    label: "Years of Experience",
    value: 20,
    suffix: "+",
  },
];


const StatCard = ({ icon, label, value, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="bg-[#F5F7FA] hover:shadow-orange-700 hover:shadow-xl shadow-lg rounded-xl p-6 py-20 text-center">
      <div className="flex justify-center mb-3">{icon}</div>
      <h3 className="text-3xl font-bold text-blue-900">
        {count}
        {suffix}
      </h3>
      <p className="black mt-2 text-sm font-medium">{label}</p>
    </div>
  );
};

const StatsAchievements = () => {
  return (
    <section className="bg-[#66656365]  text-black py-20 px-6">
           <div className="flex flex-col items-center mb-12 relative">
              <div className="flex items-center justify-between w-full max-w-6xl px-4">
                <img
                  src={leftTrees}
                  alt="Left Trees"
                  className="h-10 md:h-12 lg:h-18 object-contain"
                />
      
                <div className="text-center flex-1 px-2">
                  <h4 className="uppercase tracking-wider text-sm md:text-xl text-blue-800">
                   Our Achievements
                  </h4>
                  <h1 className="text-md sm:text-2xl md:text-xl font-serif mt-1 text-blue-800">
                   We take pride in our dedication, quality, and consistent delivery. Here's a quick snapshot of our success.
        
                  </h1>
                  <img src={leaf} alt="Leaf" className="mx-auto mt-2 h-3 md:h-4 object-contain" />
                </div>
      
                <img
                  src={rightTrees}
                  alt="Right Trees"
                  className="h-8 md:h-12 lg:h-18 object-contain"
                />
              </div>
            </div>
    

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <StatCard
              key={index}
              icon={item.icon}
              label={item.label}
              value={item.value}
              suffix={item.suffix}
            />
          ))}
        </div>
      
      
    </section>
  );
};

export default StatsAchievements;
