import { FaCertificate } from "react-icons/fa";
import { GiRibbonMedal } from "react-icons/gi";
import { SiGoogletagmanager } from "react-icons/si";
import leftTrees from "../../src/assets/home/home1.png";
import rightTrees from "../assets/home/home2.png";
import leaf from "../assets/home/leaf.png";


const certifications = [
  {
    title: "FSSAI Certified",
    icon: <FaCertificate className="text-indigo-500 text-5xl mb-4" />,
    description: "Licensed by Food Safety and Standards Authority of India",
  },
  {
    title: "USDA Organic",
    icon: <GiRibbonMedal className="text-green-500 text-5xl mb-4" />,
    description: "Certified for organic farming & sustainability",
  },
  {
    title: "ISO 22000",
    icon: <SiGoogletagmanager className="text-yellow-400 text-5xl mb-4" />,
    description: "Certified food safety management system",
  },
  {
    title: "Tea Board India",
    icon: <FaCertificate className="text-red-400 text-5xl mb-4" />,
    description: "Registered with Tea Board of India",
  },
];

const CertificationsAndAwards = () => {
  return (
    <section className="bg-[#66656365] text-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-col items-center mb-12 relative">
          <div className="flex items-center justify-between w-full max-w-6xl px-4">
            <img
              src={leftTrees}
              alt="Left Trees"
              className="h-10 md:h-12 lg:h-18 object-contain"
            />

            <div className="text-center flex-1 px-2">
              <h4 className="uppercase tracking-wider text-sm md:text-xl text-blue-800">
                Certifications & Awards
              </h4>
              <h1 className="text-md sm:text-2xl md:text-xl font-serif mt-1 text-blue-800">
                Our excellence is backed by trusted certifications and global
                recognition.
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
        <h2 className="text-3xl sm:text-4xl font-bold mb-4"></h2>
        <p className="mb-10 text-black text-sm sm:text-base"></p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="bg-[#F5F7FA]   rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 hover:shadow-cyan-600 hover:-translate-y-1"
            >
              {item.icon}
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-900">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsAndAwards;
