'use client';
import Image from "next/image";
import Icon from "./icon";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-8 px-10">
        <Image src={'/assets/jamb-logo.png'} alt="jamb" width={104} height={104}/>

        <div className="flex items-center space-x-5">
          <Icon name="search" fill={false} color=""/>
          <Icon name="msg" fill={false} color=""/>
          <Icon name="nav-list" fill={false} color=""/>
        </div>
    </nav>
  )
}

export default Navbar