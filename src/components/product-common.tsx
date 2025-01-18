'use client';
import Image from 'next/image';

interface ProductCommonProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  isAutoSize: boolean;
}

const ProductCommon: React.FC<ProductCommonProps> = ({ imageSrc, imageAlt, title, subtitle, isAutoSize }) => {
  return (
    <div className={`flex h-full flex-col   items-center gap-y-3`}>
     {isAutoSize ? (<>
      <img
        src={imageSrc}
        alt={imageAlt}
        loading="lazy"
        className="w-max h-auto my-auto"
      />
     </>):(<> <Image
        src={imageSrc}
        alt={imageAlt}
        width={330}
        height={240}
        loading="lazy"
        className="w-full h-full"
      /></>)}
      
      <h2 className='text-secondary-foreground copernicus-semibold mt-auto'>
        {title}
      </h2>
      <p className='text-sm line-clamp-1'>{subtitle}</p>
    </div>
  );
};

export default ProductCommon;