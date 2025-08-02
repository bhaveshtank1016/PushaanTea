import React from "react";
import teaFamily from "../../src/assets/about/about2.jpg";

function CompanyAbout() {
  return (
    <section className="bg-gray-400 py-12 px-6 md:px-20  flex flex-col md:flex-row items-center justify-between gap-10 relative">
  {/* Right Content - Images */}
  <div className=" max-w-2xl">
    <img
      src={teaFamily}
      alt="Family in tea field"
      className="col-span-2 w-full min-h-60 hover:shadow-cyan-500 shadow-2xl object-cover rounded-lg"
    />
  </div>

  {/* Left Content */}
  <div className="max-w-xl  ">
    <h2 className="text-3xl md:text-4xl font-serif text-blue-900 mb-6 leading-snug">
      A Physician's Love for <br />
      Wellness & Premium Indian Teas
    </h2>
    <p className=" mb-4 leading-relaxed">
      Abe and Poorvi, practicing physicians in Atlanta, founded Herbs & Kettles,
      fueled by their love for wellness and a deep appreciation for exceptional
      tea. Poorvi, a certified ITMA tea sommelier, ensures that each tea is
      personally selected for its wellness benefits, aroma, and flavor.
    </p>
    <p className=" mb-4 leading-relaxed">
      We travel to different regions of India to collaborate with small
      sustainable farmers, directly sourcing single-origin, single-batch teas
      for your enjoyment. Each tea is exquisite, and a testament to our
      dedication to quality and wellness.
    </p>
    <p className=" leading-relaxed">
      Are you ready to embark on this flavorful adventure? Join Herbs & Kettles
      and discover your delicious cup of tea for a happy, healthy you!
    </p>
  </div>
</section>

  )
}

export default CompanyAbout
