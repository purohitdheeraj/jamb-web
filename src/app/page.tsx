'use client';
import FeaturedCategory from "@/components/featured-category";
import Hero from "@/components/hero";
import ListProducts from "@/components/list-products";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <>
      <Navbar/>   
      <div className="px-10">
      <Hero/>
      <FeaturedCategory/>
      </div>
      <ListProducts/>
    </>
  );
}
