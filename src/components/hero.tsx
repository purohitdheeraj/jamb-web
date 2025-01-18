'use client';
import Image from "next/image";
import Link from "next/link";


const Hero = () => {
  return (
    <main className="flex flex-col items-center space-y-7 w-full max-w-[1436px] mx-auto">
      <Image
  src="/assets/home-banner.png"
  alt="fireplaces"
  layout="responsive"
  width={1436}
  height={768}
  className="block w-full max-h-[768px] min-h-[320px] object-cover"
/>


      <div>
        <ul className="flex items-center gap-x-2 text-secondary-foreground flex-wrap leading-6">
            <li><Link href="#fireplaces">Fireplaces |</Link></li>
            <li><Link href="#lighting">Lighting |</Link></li>
            <li><Link href="#furniture">Furniture |</Link></li>
            <li><Link href="#journal">Journal</Link></li>
        </ul>
      </div>
    </main>
  )
}

export default Hero