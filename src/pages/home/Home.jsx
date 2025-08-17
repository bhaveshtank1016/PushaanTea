import React from "react";
import "swiper/css";

// home page video and slider img
import bgVideo from "../../assets/video/vvv.mp4";

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
          <p className="text-lg md:text-xl">
            From Garden to Cup – Pure & Authentic Tea
          </p>
        </div>
      </div>
    </div>
  );
}
