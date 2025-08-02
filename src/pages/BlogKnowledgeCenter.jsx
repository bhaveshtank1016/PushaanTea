import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import leftTrees from "../../src/assets/home/home1.png";
import rightTrees from "../assets/home/home2.png";
import leaf from "../assets/home/leaf.png";

const blogPosts = [
  {
    id: "benefits-green-tea",
    title: "Benefits of Green Tea",
    summary:
      "Explore the health advantages of incorporating green tea into your daily routine.",
    content: `
      Green tea is known for its refreshing taste and powerful health benefits.
      <br/><br/>
      ✔ <strong>Rich in Antioxidants:</strong> Catechins help fight cell damage and aging.
      <br/><br/>
      ✔ <strong>Boosts Brain Function:</strong> Contains caffeine and L-theanine for better focus and calm energy.
      <br/><br/>
      ✔ <strong>Improves Metabolism:</strong> Supports fat burning and weight management.
      <br/><br/>
      ✔ <strong>Reduces Risk of Diseases:</strong> May lower risk of heart disease, cancer, and type 2 diabetes.
      <br/><br/>
      <em>Make green tea part of your wellness ritual—refresh your body and mind naturally.</em>
    `,
    image:
      "https://t3.ftcdn.net/jpg/04/30/03/12/240_F_430031290_pqnswLv53tKimyRc6cZA3i6f6QnPDJjs.jpg",
    date: "July 10, 2025",
  },
  {
    id: "ctc-vs-orthodox-tea",
    title: "CTC vs Orthodox Tea: What's the Difference?",
    summary:
      "Learn how tea processing methods impact taste, aroma, and brewing techniques.",
    content: `
      Understanding the difference between CTC and Orthodox tea helps you choose the right brew.
      <br/><br/>
      ✔ <strong>CTC (Crush-Tear-Curl):</strong> Strong, bold flavor; ideal for milk tea.
      <br/><br/>
      ✔ <strong>Orthodox:</strong> Whole leaf; complex flavor notes; preferred for black, oolong, and specialty teas.
      <br/><br/>
      ✔ <strong>Processing:</strong> CTC is machine-processed, Orthodox is often hand-rolled.
      <br/><br/>
      ✔ <strong>Brewing:</strong> CTC brews fast; Orthodox requires careful steeping.
      <br/><br/>
      <em>Both have unique qualities—choose based on your taste and occasion.</em>
    `,
    image:
      "https://www.halmaritea.com/wp-content/uploads/2024/07/Difference-between-Orthodox-and-CTC-Black-Tea.jpg.webp",
    date: "July 5, 2025",
  },
  {
    id: "brew-perfect-cup",
    title: "How to Brew the Perfect Cup of Tea",
    summary:
      "Follow these steps to extract maximum flavor and aroma from your tea.",
    content: `
      Brewing tea is an art and a science. Here's how to do it right:
      <br/><br/>
      ✔ <strong>Water Temperature:</strong> Use 80–85°C for green tea, 90–95°C for black tea.
      <br/><br/>
      ✔ <strong>Steep Time:</strong> 2–3 minutes for green, 3–5 for black, depending on preference.
      <br/><br/>
      ✔ <strong>Tea-to-Water Ratio:</strong> 1 teaspoon (2g) per 200ml cup.
      <br/><br/>
      ✔ <strong>No Over-Steeping:</strong> It makes the tea bitter—set a timer!
      <br/><br/>
      <em>Perfect brewing reveals tea's full personality—aroma, taste, and wellness.</em>
    `,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-s9_dveK42F9n2xnUJsm5QW8VTtPTlZvOg&s",
    date: "June 28, 2025",
  },
];

const BlogKnowledgeCenter = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const blogRef = useRef();

  useEffect(() => {
    if (selectedPost && blogRef.current) {
      blogRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedPost]);

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  const handleBack = () => {
    setSelectedPost(null);
    setTimeout(() => {
      blogRef.current.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <section
      ref={blogRef}
      className="bg-[#66656365] text-black py-16 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {!selectedPost ? (
          <>
            <div className="flex flex-col items-center mb-12 relative">
              <div className="flex items-center justify-between w-full max-w-6xl px-4">
                <img
                  src={leftTrees}
                  alt="Left Trees"
                  className="h-10 md:h-12 lg:h-18 object-contain"
                />

                <div className="text-center flex-1 px-2">
                  <h4 className="uppercase tracking-wider text-sm md:text-xl text-blue-800">
                    Tea Knowledge Hub
                  </h4>
                  <h1 className="text-md sm:text-2xl md:text-xl font-serif mt-1 text-blue-800">
                    Discover everything about tea—from brewing tips and health
                    benefits to industry insights and traditions.
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

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="bg-[#F5F7FA] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
                >
                  <div className="relative overflow-hidden h-52">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
                      <button
                        onClick={() => handleReadMore(post)}
                        className="text-sm text-white font-medium bg-blue-600 px-4 py-2 rounded hover:bg-indigo-500 transition"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-gray-800 mb-1">{post.date}</p>
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-800 text-sm">{post.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="max-w-4xl mx-auto border rounded-xl p-5 md:p-6 shadow bg-white">
            <button
              onClick={handleBack}
              className="text-indigo-600 hover:underline mb-4 flex items-center text-sm"
            >
              <FaArrowLeft className="mr-2" /> Back to Blog
            </button>

            <img
              src={selectedPost.image}
              alt="Blog banner"
              className="w-full h-52 object-cover rounded-lg mb-4"
            />

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
              {selectedPost.title}
            </h1>
            <p className="text-gray-500 text-xs mb-4">{selectedPost.date}</p>

            <div
              className="text-gray-800 text-[15.5px] md:text-base leading-7 md:leading-8"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogKnowledgeCenter;
