import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Teams from "@/components/Teams";
import React from "react";

const index = () => {
  return (
    <div className="bg-[#161109]">
      <Navbar />
      <AboutUs />
      <Teams />
      <Footer />
    </div>
  );
};

export default index;
