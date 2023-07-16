import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Registration from "@/components/Registration";
import React from "react";

const index = () => {
  return (
    <div className="bg-[#161109]">
      <Navbar />
      <Registration />
      <Footer />
    </div>
  );
};

export default index;
