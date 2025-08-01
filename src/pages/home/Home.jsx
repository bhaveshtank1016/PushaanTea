import React from "react";
import bgHero from "../../assets/lush green/banner.png";

import {
  FaTools,
  FaWindowRestore,
  FaBuilding,
  FaGripLines,
  FaWrench,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// home page video and slider img 
import bgVideo from "../../assets/video/vvv.mp4"

import stairImage1 from "../../assets/products/product6.png";
import stairImage2 from  "../../assets/tea/teafarming.jpg";
import stairImage3 from  "../../assets/products/product6.png";
import FeaturedTeas from "../FeaturedTeas";

export default function Home() {
  return (
    <div className="w-full scroll-smooth">
      {/* Hero Section */}
    <div className="relative w-full h-130 overflow-hidden">
         {/* Background Video */}
         <video
           autoPlay
           loop
           muted
           playsInline
           className="absolute top-0 left-0 w-full h-full object-cover z-0"
         >
           <source src={bgVideo} type="video/mp4" />
           Your browser does not support the video tag.
         </video>
   
         {/* Overlay */}
         <div className="absolute inset-0 bg-black/40 z-10" />
   
         {/* Content on top of video */}
         <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
           <h1 className="text-4xl md:text-6xl font-bold mb-4">
             Welcome to Our Pushaan Tea Center 
           </h1>
           <p className="text-lg md:text-xl">From Garden to Cup – Pure & Authentic Tea</p>
         </div>
       </div>
         <FeaturedTeas/>

      {/* Services Section  Premium Tea Solutions */}
      <section id="services" className="bg-[#66656365] text-black py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Premium Tea Solutions
            </h2>
            <p className="text-lg md:text-xl mb-6 text-gray-900">
              Specializing in high-quality tea production — from fresh garden
              leaves to hygienic packaging. We offer a wide variety of teas
              backed by modern manufacturing, export standards, and trusted
              quality.
            </p>
            <ul className="space-y-4 text-gray-900">
              {[
                {
                  icon: <FaWindowRestore className="text-blue-600 mt-1" />,
                  title: "Loose Leaf & CTC Tea Supply",
                  desc: "Bulk supply of premium-grade Assam, Darjeeling, and Nilgiri teas..",
                },
                {
                  icon: <FaBuilding className="text-blue-600 mt-1" />,
                  title: "Private Label Packaging",
                  desc: "Custom branding & packaging solutions for your business.",
                },
                {
                  icon: <FaGripLines className="text-blue-600 mt-1" />,
                  title: "Tea Blending & Flavoring",
                  desc: "Expertly crafted blends including herbal, spice-infused, and organic varieties.",
                },
                {
                  icon: <FaTools className="text-blue-600 mt-1" />,
                  title: "Export-Grade Manufacturing",
                  desc: "Certified tea processing with global shipping capabilities.",
                },
                {
                  icon: <FaWrench className="text-blue-600 mt-1" />,
                  title: "Custom Tea Box & Gift Packs",
                  desc: "Specialized design and export-ready gift boxes for festivals or corporates.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  {item.icon}
                  <div>
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-900">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT IMAGE SLIDER */}
          <div className="relative w-full">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="w-full"
            >
              {[stairImage1, stairImage2, stairImage3].map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="rounded-xl shadow-lg w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[550px] object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}
