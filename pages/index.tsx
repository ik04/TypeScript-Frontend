import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import React from "react";

const index = () => {
  return (
    <div className="h-screen bg-black">
      <Navbar />
      <Hero />
    </div>
  );
};

export default index;
