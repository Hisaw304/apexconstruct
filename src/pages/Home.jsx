import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Mission from "../components/Mission";
import CoreValues from "../components/CoreValues";
import WhyTrustUs from "../components/WhyTrustUs";
import Testimonials from "../components/Tesimonials";
import Faq from "../components/Faq";
import RecentProjects from "../components/RecentProjects";
import Contact from "../components/Contact";
import FooterCTA from "../components/FooterCTA";
import NewsInsights from "../components/NewsInsight";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Mission />
      <WhyTrustUs />
      <CoreValues />
      <Testimonials />
      <RecentProjects />
      <NewsInsights />
      <Faq />
      <Contact />
      <FooterCTA />
    </div>
  );
};

export default Home;
