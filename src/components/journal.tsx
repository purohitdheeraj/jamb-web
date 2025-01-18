'use client';

import CategoryCommon from "./category-common";

const Journal = () => {
  return (
    <CategoryCommon
    title={'Subscribe to the Jamb Journal'}
    description="Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magna ad minim veniam."
    buttons={[
      { label: 'Discover more', variant: 'outline', onClick: () => console.log('Explore clicked') },
    ]}
    image={{
      src: '/assets/journal.png',
      alt: 'furniture',
      width: 410,
      height: 560,
    }}
  />
  )
}

export default Journal;