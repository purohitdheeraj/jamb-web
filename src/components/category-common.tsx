'use client';
import React, { ReactNode } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

interface ButtonProps {
  label: string;
  variant?: 'link' | 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | null; 
  onClick?: () => void;
}

interface CategoryCommon {
  title: string;
  description: string;
  buttons: ButtonProps[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

const CategoryCommon: React.FC<CategoryCommon> = ({ title, description, buttons, image }) => {
  return (
    <div className="flex items-center justify-between mt-24 flex-wrap space-y-3">
      <div className="max-w-[510px] text-center mx-auto space-y-4">
        <h2 className="text-3xl copernicus-semibold">{title}</h2>
        <p className="text-left leading-6">{description}</p>

        <div className=" flex xl:flex-col gap-y-3 flex-wrap justify-center space-x-3 items-center  text-secondary-foreground">
          {buttons.map((button, index) => (
            <Button
              key={index}
              className="font-semibold"
              variant={button.variant || 'outline'}
              onClick={button.onClick}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>

      <div className=" xl:max-w-[584px] w-full xl:mr-24">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default CategoryCommon;
