'use client';

import CategoryCommon from "./category-common";

const Journal = () => {
  return (
    <CategoryCommon
      title={'Subscribe to the Jamb Journal'}
      description="Stay updated with the latest trends, tips, and insights in the world of furniture and home decor. Subscribe to our journal and never miss an update!"
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