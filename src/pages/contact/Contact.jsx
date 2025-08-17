import React, { useRef } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { ShieldCheck, Truck, RotateCcw, Headphones } from "lucide-react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import emailjs from "emailjs-com";
import bg from "../../assets/banners/contact.jpg";
const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-red-900" />,
    title: "PREMIUM QUALITY",
    desc: "100% Quality Guarantee",
  },
  {
    icon: <Truck className="w-10 h-10 text-red-900" />,
    title: "SWIFT SHIPPING",
    desc: "Delivering across India",
  },
  {
    icon: <RotateCcw className="w-10 h-10 text-red-900" />,
    title: "EASY RETURN",
    desc: "Refer return policy",
  },
  {
    icon: <Headphones className="w-10 h-10 text-red-900" />,
    title: "24/7 SUPPORT",
    desc: "Support every time",
  },
];

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6sbjhds",
        "template_cmgp9a9",
        form.current,
        "AuuiQAXPgWMXLUGCh"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };
  return (
    <div className="">
      {/* Hero Section */}
      <div
        className="bg-gradient-to-r from-[#6d2e2e] to-[#854040] w-full text-white py-30"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="max-w-7xl mx-auto px-6  text-start">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-3 text-gray-200">
            Home <span className="mx-2">—</span> Contact Us
          </p>
        </div>
      </div>

      {/* Get In Touch Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We are here to help our customers all over world. We would be happy
            to assist you. So let us know what are your queries or what you are
            looking for, we will get back to you shortly.
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Info Card */}
          <div className="bg-[#5a0a0a] text-white rounded-xl p-8 space-y-6 shadow-lg">
            <div>
              <h3 className="text-xl font-semibold mb-2">Visit Our Factory</h3>
              <p className="flex items-center gap-3">
                <FaPhoneAlt /> Reach us on call/whatsapp <br />
                <span className="ml-6">+91-9799986623</span>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Email Address</h3>
              <p className="flex items-center gap-3">
                <FaEnvelope /> pushaan@greenleaftea.com
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Office Location</h3>
              <p className="flex items-start gap-3">
                <FaMapMarkerAlt />
                A12, Rd No 3, near evening news, Sudarshanpura, Bais Godam,
                Jaipur, Rajasthan 302007
              </p>
            </div>
            {/* <div className="flex gap-3">
              <Clock className="text--600" />
              <div>
                <p className="font-semibold">Hours</p>
                <p>Mon – Sun: 9:00 AM – 6:00 PM</p>
              </div>
            </div> */}

            {/* <div>
              <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
              <div className="flex gap-4 text-2xl">
                <a href="#" className="hover:text-yellow-400">
                  <FaFacebook />
                </a>
                <a href="#" className="hover:text-yellow-400">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-yellow-400">
                  <FaLinkedin />
                </a>
                <a href="#" className="hover:text-yellow-400">
                  <FaInstagram />
                </a>
              </div>
            </div> */}
            <div className="mt-3 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Factory Location"
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d113864.6114181875!2d75.70913812745694!3d26.89495329527372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x396db43d861e3ceb%3A0x7b70a1cc9bd2914a!2sA12%2C%20Rd%20No%203%2C%20near%20evening%20news%2C%20Sudarshanpura%2C%20Bais%20Godam%2C%20Jaipur%2C%20Rajasthan%20302007!3m2!1d26.8949592!2d75.7915256!5e0!3m2!1sen!2sin!4v1754157597633!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Contact Form */}
          {/* Inquiry / Visit Form */}
          <section>
            <div className="bg-[#acadae]     p-6 rounded-xl shadow-md w-full">
              <h3 className="text-2xl font-bold mb-9">
                Book a Factory Visit / Send Inquiry
              </h3>
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Full Name"
                    className="border border-gray-800 p-3 rounded w-full text-black"
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email Address"
                    className="border border-gray-800 p-3 rounded w-full text-black"
                  />
                </div>

                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="border border-gray-800 p-3 rounded w-full text-black"
                />

                <select
                  name="product"
                  required
                  className="border border-gray-800 p-3 rounded w-full text-black"
                >
                  <option value="">Select Product</option>
                  <option value="CTC Tea">CTC Tea</option>
                  <option value="Orthodox Tea">Orthodox Tea</option>
                  <option value="Green Tea">Green Tea</option>
                  <option value="Custom Blend">Custom Blend</option>
                </select>

                <input
                  name="quantity"
                  type="text"
                  placeholder="Required Quantity (e.g., 500kg)"
                  className="border border-gray-800 p-3 rounded w-full text-black"
                />

                <input
                  name="delivery_location"
                  type="text"
                  placeholder="Delivery Location"
                  className="border border-gray-800 p-3 rounded w-full text-black"
                />

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Additional Instructions / Inquiry"
                  className="border border-gray-800 p-3 rounded w-full text-black"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white py-3 px-6 rounded shadow-lg hover:shadow-cyan-400 hover:bg-indigo-500"
                >
                  Submit
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-white shadow-md mb-6 rounded-2xl p-6 max-w-7xl mx-auto mt-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center border-r last:border-r-0 border-gray-200"
            >
              {item.icon}
              <h3 className="font-semibold text-black mt-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
