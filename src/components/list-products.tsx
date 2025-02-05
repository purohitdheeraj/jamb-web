'use client';

import ProductCommon from "./product-common";

interface ProductCommonProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
}

interface ListProductsProps {
  products: ProductCommonProps[];
  title: string;
  col: number;
}

const ListProducts: React.FC<ListProductsProps> = ({ products, title, col }) => {
  return (
    <div className="w-full bg-secondary py-9 px-10">
      <h2 className="text-2xl text-center copernicus-semibold">
        {title}
      </h2>

      <div className={`mt-8 grid grid-cols-1 gap-y-12 items-center sm:grid-cols-2 ${col === 5 ? 'lg:grid-cols-5 gap-8': 'lg:grid-cols-4 gap-4'} `}>
        {products.map((product, index) => (
          <ProductCommon
            key={index}
            imageSrc={product.imageSrc}
            imageAlt={product.imageAlt}
            title={product.title}
            subtitle={product.subtitle}
            isAutoSize={col == 5}
          />
        ))}
      </div>
    </div>
  );
};

export default ListProducts;