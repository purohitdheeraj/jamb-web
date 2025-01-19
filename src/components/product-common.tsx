'use client';
import Image from 'next/image';
import * as motion from "motion/react-client"


interface ProductCommonProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  isAutoSize: boolean;
}

const transition = {
  duration: 0.4,
  delay: 0.2,
}

const ProductCommon: React.FC<ProductCommonProps> = ({ imageSrc, imageAlt, title, subtitle, isAutoSize }) => {
  return (
  
    <motion.div  whileHover={{ scale: 0.9 }}
    whileTap={{ scale: 0.9 }}
    transition={transition}
    
     className={`flex h-full flex-col cursor-pointer   items-center gap-y-3`}>
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
    </motion.div>
  );
};

export default ProductCommon;