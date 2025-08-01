import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import Footer from "../src/components/Footer";
import WhyChooseUs from "./pages/WhyChooseUs";
import ProjectGallery from "./pages/ProjectGallery";
import ClientTestimonials from "./pages/ClientTestimonials";
import FloatingCTAButton from "./pages/FloatingCTAButton";
import BlogKnowledgeCenter from "./pages/BlogKnowledgeCenter";
import OurProducts from "./pages/OurProducts";
import CertificationsAndAwards from "./pages/CertificationsAndAwards";
import FeaturedTeas from "./pages/FeaturedTeas";
import ChaiCombo from "./pages/ChaiCombo";
import IndustriesWeServe from "./pages/IndustriesWeServe";
import TeaFlavorGIF from "./pages/TeaFlavorGIF";
import OurAchievements from "./pages/OurAchievements";

export default function App() {
  return (
    <>
      <Navbar />

      <div id="home">
        <Home />
      </div>

      <div id="services">
        <Services />
      </div>

      {/* Below sections will be visible on scroll, not linked in Navbar */}
      <TeaFlavorGIF />
      <ChaiCombo />
      {/* <FeaturedTeas /> */}
      <OurProducts />
      <OurAchievements />
      <IndustriesWeServe />
      <WhyChooseUs />
      <ClientTestimonials />
      <CertificationsAndAwards />
      <ProjectGallery />
      <BlogKnowledgeCenter />
      <div id="about">
        <About />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
      <FloatingCTAButton />
    </>
  );
}
