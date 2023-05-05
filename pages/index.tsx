import { Analytics } from "@/components/Analytics";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Newsletter } from "@/components/Newletter";
import React from "react";

const index = () => {
  return (
    <div className="h-screen bg-black">
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
    </div>
  );
};

export default index;
