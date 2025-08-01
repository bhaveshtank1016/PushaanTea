import React, { useState } from "react";
import comboImage from "../assets/tea/tea6.jpg"; // replace with actual image path
import bgImage from "../assets/banners/bgcombo.jpg";

const ChaiCombo = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
   <section
  className="w-full bg-cover bg-center py-16 px-4 md:px-16"
  style={{ backgroundImage: `url(${bgImage})` }}
>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={comboImage}
            alt="Chai Combo"
            className="rounded-md shadow-lg w-[80%]"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-white relative">
          <p className="uppercase text-sm tracking-widest text-white/80">
            Try an assortment of our best selling chais
          </p>

          <h1 className="text-4xl md:text-5xl font-serif font-semibold mt-2">
            Chai Set Combo
          </h1>

          <p className="text-xl mt-4 text-white/90">$41.00</p>

          <p className="mt-4 text-white/80">
            A trio of our exceptional Masala Chai, Rose Cardamom Chai and
            Vanilla Lavender Chai to satisfy any chai fantasy.
          </p>

          {/* Quantity & Add to Cart */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center bg-white text-black rounded-full overflow-hidden">
              <button
                onClick={handleDecrease}
                className="px-3 py-1 text-xl font-bold hover:bg-gray-100"
              >
                −
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="px-3 py-1 text-xl font-bold hover:bg-gray-100"
              >
                +
              </button>
            </div>

            <button className="bg-white text-black px-6 py-2 rounded-full flex items-center gap-2 font-semibold hover:bg-gray-100 transition">
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChaiCombo;
