'use client';

import ProductCommon from "./product-common";

interface ProductCommonProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
}

const products: ProductCommonProps[] = [
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

const ListProducts = () => {
  return (
    <div className="mt-32 w-full bg-secondary py-9 px-10">
      <h2 className="text-2xl font-semibold text-center" >
        Our latest chimneypieces
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <ProductCommon
              key={index}
              imageSrc={product.imageSrc}
              imageAlt={product.imageAlt}
              title={product.title}
              subtitle={product.subtitle}
            />
          ))}
        </div>
      
    </div>
  )
}

export default ListProducts