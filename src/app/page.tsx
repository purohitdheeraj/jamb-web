'use client';
import FeatureProducts from "@/components/feature-products";
import Featured from "@/components/featured";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <>
      <Navbar/>   
      <div className="px-10">
      <Hero/>
      <FeatureProducts/>
      </div>
    </>
  );
}
