'use client';
import Image from 'next/image';

interface ProductCommonProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
}

const ProductCommon: React.FC<ProductCommonProps> = ({ imageSrc, imageAlt, title, subtitle }) => {
  return (
    <div className='flex flex-col xl:max-w-[330px] items-center gap-y-3'>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={330}
        height={240}
        loading="lazy"
        className="w-full h-full"
      />
      <h2 className='text-secondary-foreground font-bold'>
        {title}
      </h2>
      <p className='text-sm'>{subtitle}</p>
    </div>
  );
};

export default ProductCommon;