import React from "react";

function PremiumTea() {
  return (
    <>
      {" "}
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
    </>
  );
}

export default PremiumTea;
