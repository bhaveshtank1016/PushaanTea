import React, { useEffect, useState } from "react";
import { FaBriefcase, FaSmile, FaUsers,FaAward } from "react-icons/fa";
import ProjectGallery from './ProjectGallery';

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
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold  mb-4">Our Achievements</h2>
        <p className="text-gray-900 mb-12 max-w-xl mx-auto">
          We take pride in our dedication, quality, and consistent delivery. Here's a quick snapshot of our success.
        </p>

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
      </div>
      
    </section>
  );
};

export default StatsAchievements;
