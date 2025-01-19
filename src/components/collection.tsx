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
    description="Explore our exclusive collection of finely crafted furniture, designed to bring elegance and comfort to your living space."
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