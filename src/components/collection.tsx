'use client';

import CategoryCommon from "./category-common";

const Collection = () => {
  return (
    <CategoryCommon
    title={<>
      <div>
          <small className="copernicus-semibold">JOURNAL</small>
          <h2 className="text-3xl copernicus-semibold mt-6">
          The Grand Collection
          </h2>
      </div>
    </>}
    description="Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magna ad minim veniam."
    buttons={[
      { label: 'Discover more', variant: 'outline', onClick: () => console.log('Explore clicked') },
    ]}
    image={{
      src: '/assets/collection.png',
      alt: 'furniture',
      width: 584,
      height: 734,
    }}
  />
  )
}

export default Collection;