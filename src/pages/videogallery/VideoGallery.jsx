// import React from "react";
// import videogallery from "../../assets/banners/videogallery.png";

// export default function VideoSection() {
//   return (
//     <div
//       className="bg-[#5c0f0f] min-h-screen flex flex-col items-center px-4 py-10 bg-cover bg-center"
//       style={{ backgroundImage: `url(${videogallery})` }}
//     >
//       {/* Top Section (Text + Video) */}
//       <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
//         {/* Left Side Content */}

//         {/* Right Side Video */}
//         <div className="flex-1 w-full">
//           <div className="aspect-video bg-black rounded-2xl shadow-lg overflow-hidden">
//             <iframe
//               className="w-full h-full"
//               src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video link
//               title="Video Player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Feature Box */}
//       {/* <div className="mt-14 bg-white shadow-lg rounded-2xl flex flex-col md:flex-row justify-between items-center gap-8 px-10 py-8 w-full max-w-5xl">
//         <div className="flex flex-col items-center text-center">
//           <span className="text-2xl">🎧</span>
//           <p className="text-sm font-medium mt-2">Customer Support</p>
//         </div>
//         <div className="flex flex-col items-center text-center">
//           <span className="text-2xl">🔒</span>
//           <p className="text-sm font-medium mt-2">Secure Shopping</p>
//         </div>
//         <div className="flex flex-col items-center text-center">
//           <span className="text-2xl">🚚</span>
//           <p className="text-sm font-medium mt-2">Swift Shipping</p>`
//         </div>
//         <div className="flex flex-col items-center text-center">
//           <span className="text-2xl">💸</span>
//           <p className="text-sm font-medium mt-2">Money Return</p>
//         </div>
//       </div> */}
//     </div>
//   );
// }
import React, { useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import videogallery from "../../assets/banners/videogallery.png";
import btnvideo from "../../assets/video/vvv.mp4"

export default function VideoPlayerSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative bg-[#5c0f0f] min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-cover bg-center cursor-pointer"
      style={{ backgroundImage: `url(${videogallery})` }}
      onClick={() => setIsOpen(true)} 
    >
      {/* Background Filmstrip */}
      <div className="absolute inset-0 opacity-20 bg-[url('/filmstrip.png')] bg-cover bg-center"></div>

     

      {/* Modal for Video */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setIsOpen(false)} 
        >
          <div
            className="relative w-[90%] md:w-[60%] h-[60%] bg-black rounded-lg overflow-hidden shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>

            {/* Video Player */}
            <iframe
              className="w-full h-full"
              src={btnvideo}
              title="Demo Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
