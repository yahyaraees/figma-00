import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Featured from "./components/featured";
import Latest from "./components/latest";
import Footer from "./components/footer";
import Blog from "./components/blog";

//
export default function Home() {
  return (
    <div>
    
     
      <Navbar/>
      <Hero/>
      <Featured/>
      <Latest/>
      <Blog/>
      <Footer/>
    </div>

    
  );
}
