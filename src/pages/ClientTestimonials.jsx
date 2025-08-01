import { Quote } from "lucide-react";
import { IoIosPerson } from "react-icons/io";

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
        <h2 className="text-4xl font-bold mb-2">What Our Clients Say</h2>
        <p className="text-gray-900 mb-12">
          Hear from partners who trust our tea quality, packaging, and service.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-[#636c7a] text-black p-6 hover:shadow-orange-700 hover:shadow-xl shadow-lg rounded-xl  text-left"
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
