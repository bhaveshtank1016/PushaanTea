import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import Footer from "../src/components/Footer";
import WhyChooseUs from "./pages/WhyChooseUs";
import ProjectGallery from "./pages/ProjectGallery";
import ClientTestimonials from "./pages/ClientTestimonials";
import FloatingCTAButton from "./components/FloatingCTAButton";
import BlogKnowledgeCenter from "./pages/BlogKnowledgeCenter";
import CertificationsAndAwards from "./pages/CertificationsAndAwards";
import ChaiCombo from "./pages/ChaiCombo";
import IndustriesWeServe from "./pages/IndustriesWeServe";
import TeaFlavorGIF from "./pages/TeaFlavorGIF";
import OurAchievements from "./pages/OurAchievements";
import FeaturedTeas from "./pages/FeaturedTeas"
import VideoGallery from "./pages/videogallery/VideoGallery";

export default function App() {
  return (
    <>
      <Navbar />

      <Home />
      <FeaturedTeas/>
      <TeaFlavorGIF />
      <ChaiCombo />
      <CertificationsAndAwards />
      <Services />
      <BlogKnowledgeCenter />

      <About />


      <OurAchievements />
      <IndustriesWeServe />
      <WhyChooseUs />
      <VideoGallery/>
      <ClientTestimonials />
      <ProjectGallery />

      <div id="contact">
        <Contact />
      </div>

      <Footer />
      <FloatingCTAButton />
    </>
  );
}
