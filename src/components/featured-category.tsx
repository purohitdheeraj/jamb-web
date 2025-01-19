'use client';
import CategoryCommon from "./category-common";


const FeaturedCategory = () => {
  return (
    <>
    <CategoryCommon
    title="Fireplaces"
    description="Discover our exquisite collection of antique fireplaces, each piece meticulously crafted to add a touch of elegance and warmth to your home. From classic marble designs to intricate wooden mantels, our selection offers something for every taste and style."
    buttons={[
      { label: 'Explore our Fireplaces', variant: 'outline', onClick: () => console.log('Explore clicked') },
      { label: 'Sell an Antique Chimneypiece', variant: 'outline', onClick: () => console.log('Sell clicked') },
    ]}
    image={{
      src: '/assets/fireplaces.png',
      alt: 'fireplaces',
      width: 584,
      height: 734,
    }}
    />


  <CategoryCommon
    title="Lighting"
    description="Illuminate your space with our curated range of antique lighting fixtures. From grand chandeliers to charming sconces, each piece is a testament to timeless design and superior craftsmanship, perfect for adding a unique glow to any room."
    buttons={[
      { label: 'Explore our Lighting', variant: 'outline', onClick: () => console.log('Explore clicked') },
    ]}
    image={{
      src: '/assets/lighting.png',
      alt: 'lighting',
      width: 584,
      height: 734,
    }}
    />

    </>
  )
}

export default FeaturedCategory;