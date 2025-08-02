import React, { useState } from "react";
import { FaSearchPlus } from "react-icons/fa";
import hero11 from "../assets/products/royalproduct.png";
import hero12 from "../assets/products/hero13.png";
import hero13 from "../assets/products/product5.png";
import leftTrees from "../../src/assets/home/home1.png";
import rightTrees from "../assets/home/home2.png";
import leaf from "../assets/home/leaf.png";

const projectData = [
  {
    id: 1,
    title: "Tea Fields in Assam",
    category: "Fields",
    image: hero11,
    description: "Lush tea gardens under morning mist in Assam.",
  },
  {
    id: 2,
    title: "Modern Tea Factory",
    category: "Factory",
    image: hero12,
    description: "Advanced tea processing plant using latest technology.",
  },
  {
    id: 3,
    title: "International Tea Exhibition",
    category: "Exhibitions",
    image: hero13,
    description: "Showcasing our premium blends at a global expo.",
  },
];

const categories = ["All", "Fields", "Factory", "Exhibitions"];

const ProjectGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="ProjectGallery"
      className="bg-[#66656365] text-black py-20 px-6 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12 relative">
          <div className="flex items-center justify-between w-full max-w-6xl px-4">
            <img
              src={leftTrees}
              alt="Left Trees"
              className="h-10 md:h-12 lg:h-18 object-contain"
            />

            <div className="text-center flex-1 px-2">
              <h4 className="uppercase tracking-wider text-sm md:text-xl text-blue-800">
                Project Gallery
              </h4>
              <h1 className="text-md sm:text-2xl md:text-xl font-serif mt-1 text-blue-800">
                Explore some of our recent projects across various services.
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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition duration-200 ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full h-64 object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-white dark:bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-black dark:text-white rounded-lg">
                <FaSearchPlus size={24} />
                <p className="mt-2 font-semibold">View Details</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal View */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white dark:bg-gray-800 max-w-lg w-full p-6 rounded-lg relative shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="rounded-lg w-full mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {selectedProject.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {selectedProject.category}
              </p>
              <p className="text-gray-800 dark:text-gray-200 text-sm">
                {selectedProject.description}
              </p>
              <button
                className="absolute top-1 right-2 font-bold text-sm text-gray-700 dark:text-white hover:underline"
                onClick={() => setSelectedProject(null)}
              >
                BACK
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGallery;
