'use client';
import Image from "next/image";
import { Button } from "./ui/button";


const Hero = () => {
  return (
    <main className="flex flex-col items-center space-y-7 w-full max-w-[1436px] mx-auto">
      <Image
  src="/assets/home-banner.png"
  alt="fireplaces"
  width={1436}
  height={768}
  loading="lazy"
  className="block w-full max-h-[768px] min-h-[320px] object-cover"
/>

      <div>
        <ul className="flex items-center gap-x-2 text-secondary-foreground flex-wrap leading-6">
            <li><Button variant='link'>Fireplaces</Button></li>
            <li>|</li>
            <li><Button variant='link' >Lighting</Button></li>
            <li>|</li>
            <li><Button variant='link' >Furniture</Button></li>
            <li>|</li>
            <li><Button variant='link' >Journal</Button></li>
        </ul>
      </div>
    </main>
  )
}

export default Hero