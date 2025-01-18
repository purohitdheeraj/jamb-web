'use client';
import CategoryCommon from "@/components/category-common";
import FeaturedCategory from "@/components/featured-category";
import Hero from "@/components/hero";
import Collection from "@/components/collection";
import ListProducts from "@/components/list-products";
import Navbar from "@/components/navbar";
import { chimneyProducts, lightProducts, furnitureProducts } from "@/lib/products";


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
      <div className="px-10">
      <CategoryCommon
    title="Furniture"
    description="Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magna ad minim veniam."
    buttons={[
      { label: 'Explore our Furniture', variant: 'outline', onClick: () => console.log('Explore clicked') },
    ]}
    image={{
      src: '/assets/furniture-banner.png',
      alt: 'furniture',
      width: 584,
      height: 734,
    }}
  />
      </div>

      <div className="mt-32">
      <ListProducts col={5} products={furnitureProducts} title={'Our latest furniture'}/>
      </div>

      <div className="py-36 bg-accent">
        <Collection/>
      </div>
    </>
  );
}
