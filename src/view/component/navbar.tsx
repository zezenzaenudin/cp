"use client"

import Link from "next/link";
import Image from "next/image";
import icon from "../component/icons.svg";
import hamburger_active from "../../app/hambuger-active.svg";
import hamburger_non_active from "@/app/hamburger-nonactive.svg";
import home_icon from "@/app/home-icon.svg";
import { useState } from "react";

export default function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState<boolean>(true);

    return (
     <nav className="text-lg">
       <div className="bg-white container mx-auto px-4 py-4 flex">
          <div className="container mx-auto flex px-4 py-[22px] items-center justify-between">
              <div>
                <Image src={icon} alt="" />
              </div>
              <div className="hidden lg:block">              
                  <ul className="flex items-center gap-1 border-2 border-black rounded-full">
                    <li className="flex gap-2 py-[10px] px-[18px] bg-black text-white rounded-full">
                      <Image src={home_icon} alt=""/>
                      <Link href="/">Home</Link>                      
                    </li>                
                    <li className="py-[10px] px-[18px]">
                      <Link href="/about-us">About Us</Link>                      
                    </li>
                    <li className="py-[10px] px-[18px]">
                      <Link href="/services">Service</Link>                         
                    </li>
                    <li className="py-[10px] px-[18px]">
                      <Link href="/team">Team</Link>
                    </li>
                  </ul>
              </div>  
              <div 
              className="cursor-pointer lg:hidden"
              onClick={() => setToggleNavbar(toggleNavbar? false : true)}>
                <Image src={toggleNavbar? hamburger_active: hamburger_non_active} alt=""/>
              </div>           
        </div>          
         
      </div>     
      <div className={`block lg:hidden ${toggleNavbar ? "block": "hidden"}`}>
        <ul className="text-lg text-black">
          <li className="bg-black text-white px-4 py-[10px] border-b-2 border-black">
            <Link href="/">Home</Link>  
          </li>
          <li className="bg-white text-black px-4 py-[10px] border-b-2 border-black">
            <Link href="/about-us">About Us</Link> 
          </li>
          <li className="bg-white text-black px-4 py-[10px] border-b-2 border-black">
           <Link href="/services">Services</Link>             
          </li>
          <li className="bg-white text-black px-4 py-[10px] border-b-2 border-black">
            <Link href="/team">Team</Link>             
          </li>            
        </ul>
      </div>
     </nav>
     
    );
  }