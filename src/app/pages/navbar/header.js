"use client";

import Image from "next/image";
import Link from "next/link"
import { FaFacebook , FaArrowDown } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";


export default function Header() {


    const [active, setActive] = useState(null);
  
    const handleBg = (l) => {
      setActive(l);
        
    };

  return (
    <header className="hidden md:block">
      <div className="h-12 bg-white flex justify-end items-center pl-20">
        <FaFacebook className="inline m-2 text-xl text-[#028E81]"/>
        <FaXTwitter className="inline m-2 text-xl text-[#028E81]"/>
      </div>

      <nav className="relative h-16 bg-[#028E81] text-white flex gap-20 justify-center items-center ">
        <div className="relative z-20 rounded-2xl bg-white p-2 mt-6 shadow-2xl" >
          <Image src="/logo.webp" alt="logo" width={150} height={150} />
        </div>

        <ul className="flex gap-8 text-lg font-semibold">
          <li onClick={() => handleBg('home')}><Link href="/" className={`hover:text-amber-500 ${active === 'home' && 'text-amber-400'}`}>الرئيسية</Link></li>
          <li onClick={() => handleBg('about')}><Link href="/about" className={`hover:text-amber-500 ${active === 'about' && 'text-amber-400'}`}> منصه تقريب </Link></li>

          <li className="relative group cursor-pointer"
            onClick={() => handleBg('services')}
          >
            <div className={`flex items-center gap-1 hover:text-amber-400 mb-2 ${active === 'services' && 'text-amber-500'}`}>
              <span>الواقع الاجتماعي في اليمن</span>
              <FaArrowDown />
            </div>

            {/* القائمة المنسدلة */}
           <ul className="absolute  right-0 top-full w-full bg-[#028E81] ... hidden group-hover:block z-50">

              <li className="px-4 py-1 hover:text-amber-400"
              onClick={() => setActive('work-news')}>
                <Link href="/work-news" className={`${active === 'work-news' && 'text-amber-500'}`}>اخبار العمل الخيري </Link>
              </li>
              <li className="px-4 py-1 hover:text-amber-500">
                <Link href="/reports"> الدراسات والتقارير </Link>
              </li>
            </ul>
          </li>

          <li onClick={() => handleBg('associations')}><Link href="/associations" className={`hover:text-amber-400 ${active === 'associations' && 'text-amber-500'}`}> دليل الجمعيات </Link></li>
          <li onClick={() => handleBg('blog')}><Link href="/blog" className={`hover:text-amber-400 ${active === 'blog' && 'text-amber-500'}`}> مدونة تقريب </Link></li>
          <li onClick={() => handleBg('contact')}><Link href="/contact" className={`hover:text-amber-400 ${active === 'contact' && 'text-amber-500'}`}> تواصل معنا </Link></li>
        </ul>
      </nav>
    </header>
  )
}
