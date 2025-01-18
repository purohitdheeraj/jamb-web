'use client';
import Featured from "./featured";


const FeatureProducts = () => {
  return (
    <>
    <Featured
    title="Fireplaces"
    description="Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magna ad minim veniam."
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


<Featured
    title="Lighting"
    description="Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magna ad minim veniam."
    buttons={[
      { label: 'Explore our Lighting', variant: 'outline', onClick: () => console.log('Explore clicked') },
    ]}
    image={{
      src: '/assets/lighting.png',
      alt: 'fireplaces',
      width: 584,
      height: 734,
    }}
  />

  </>
  )
}

export default FeatureProducts