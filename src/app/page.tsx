'use client';
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <>
      <Navbar/>   
      <div className="px-10">
      <Hero/> 
      </div>
    </>
  );
}
