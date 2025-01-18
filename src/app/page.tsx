'use client';
import FeaturedCategory from "@/components/featured-category";
import Hero from "@/components/hero";
import ListProducts from "@/components/list-products";
import Navbar from "@/components/navbar";


const chimneyProducts: any = [
  {
    imageSrc: "/assets/chimney.png",
    imageAlt: "Product 1",
    title: "Elegant Chimneypiece",
    subtitle: "Classic design with modern touch",
  },
  {
    imageSrc: "/assets/chimney.png",
    imageAlt: "Product 2",
    title: "Modern Chimneypiece",
    subtitle: "Sleek and stylish",
  },
  {
    imageSrc: "/assets/chimney.png",
    imageAlt: "Product 3",
    title: "Vintage Chimneypiece",
    subtitle: "Timeless elegance",
  },
  {
    imageSrc: "/assets/chimney.png",
    imageAlt: "Product 4",
    title: "Rustic Chimneypiece",
    subtitle: "Warm and cozy",
  },
];

const lightProducts: any = [
  {
    imageSrc: "/assets/light.png",
    imageAlt: "Light 1",
    title: "Elegant Light Fixture",
    subtitle: "Classic design with modern touch",
  },
  {
    imageSrc: "/assets/light.png",
    imageAlt: "Light 2",
    title: "Modern Light Fixture",
    subtitle: "Sleek and stylish",
  },
  {
    imageSrc: "/assets/light.png",
    imageAlt: "Light 3",
    title: "Vintage Light Fixture",
    subtitle: "Timeless elegance",
  },
  {
    imageSrc: "/assets/light.png",
    imageAlt: "Light 4",
    title: "Rustic Light Fixture",
    subtitle: "Warm and cozy",
  },
  {
    imageSrc: "/assets/light.png",
    imageAlt: "Light 5",
    title: "Industrial Light Fixture",
    subtitle: "Bold and functional",
  },
];



export default function Home() {
  
  
  return (
    <>
      <Navbar/>   
      <div className="px-10">
      <Hero/>
      <FeaturedCategory/>
      </div>
      <div className="mt-32">
      <ListProducts col={4} products={chimneyProducts} title={'Our latest chimneypieces'}/>
      <ListProducts col={5} products={lightProducts} title={'Our latest lighting'}/>
      </div>
    </>
  );
}
