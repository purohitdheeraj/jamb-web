'use client';
import CategoryCommon from "@/components/category-common";
import FeaturedCategory from "@/components/featured-category";
import Hero from "@/components/hero";
import Collection from "@/components/collection";
import ListProducts from "@/components/list-products";
import Navbar from "@/components/navbar";
import { chimneyProducts, lightProducts, furnitureProducts, latestStories } from "@/lib/products";
import Journal from "@/components/journal";
import Footer from "@/components/footer";


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
      <div className="py-10">
      <CategoryCommon
        title="Furniture"
        description="Discover our exquisite range of furniture, crafted to perfection to enhance your living spaces. From contemporary designs to classic pieces, our collection offers something for every taste and style."
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

      <div className="xl:mt-32">
      <ListProducts col={5} products={furnitureProducts} title={'Our latest furniture'}/>
      </div>

      <div className="xl:py-36 bg-accent py-2 ">
        <Collection/>
      </div>

      
      <ListProducts col={5} products={latestStories} title={'See more of our latest stories'}/>

      <div className="xl:py-52 py-10">
        <Journal/>
      </div>
      <Footer/>
    </>
  );
}
