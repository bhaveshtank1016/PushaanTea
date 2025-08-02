import { Quote } from "lucide-react";
import leftTrees from "../../src/assets/home/home1.png";
import rightTrees from "../assets/home/home2.png";
import leaf from "../assets/home/leaf.png";

const testimonials = [
  {
    initials: "AK",
    name: "Anita Kapoor",
    role: "Retailer",
    review:
      "The organic green tea quality is top-notch. Our customers love the aroma and freshness!",
    rating: 5,
  },
  {
    initials: "RM",
    name: "Rajiv Mehta",
    role: "Tea Exporter",
    review:
      "Reliable packaging and consistent supply. Excellent support from the production team.",
    rating: 4,
  },
  {
    initials: "VS",
    name: "Vikram Singh",
    role: "Cafe Owner",
    review:
      "Flavored tea blends are a hit! Our cafe sales doubled thanks to their premium collection.",
    rating: 5,
  },
];

const ClientTestimonials = () => {
  return (
    <section className="py-16 bg-gray-400 text-black ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center mb-12 relative">
          <div className="flex items-center justify-between w-full max-w-6xl px-4">
            <img
              src={leftTrees}
              alt="Left Trees"
              className="h-10 md:h-12 lg:h-18 object-contain"
            />

            <div className="text-center flex-1 px-2">
              <h4 className="uppercase tracking-wider text-sm md:text-xl text-blue-800">
                What Our Clients Say
              </h4>
              <h1 className="text-md sm:text-2xl md:text-xl font-serif mt-1 text-blue-800">
                Hear from partners who trust our tea quality, packaging, and
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-[#636c7a] text-black p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-700 hover:shadow-xl shadow-lg rounded-xl  text-left"
            >
              <Quote className="text-green-600 mb-3 w-6 h-6" />
              <p className="mb-6">{item.review}</p>

              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 text-black font-bold w-10 h-10 flex items-center justify-center rounded-full">
                  {item.initials}
                </div>
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                  <div className="flex mt-1 text-yellow-400">
                    {Array.from({ length: item.rating }).map((_, j) => (
                      <span key={j}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
