
'use client';

import Image from "next/image";
import Link from "next/link"
import { FaFacebook , FaArrowDown } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useContext } from "react";
import { Context } from "../../Context/context";
import Logo from "./logo";
import { HiViewList } from "react-icons/hi";


export default function Header() {


  const {active, setActive} = useContext(Context);

    const handleBg = (l) => {
      setActive(l);
        
    };

  return (
    <header>
      <div className="h-24 md:h-14 w-full bg-white flex justify-end items-center">
        <div className="hidden md:block pl-20">
<FaFacebook className="inline m-2 text-xl text-[#028E81]"/>
        <FaXTwitter className="inline m-2 text-xl text-[#028E81]"/>
        </div>
        <div className="md:hidden ">

          <div className="w-[100vw] flex justify-between items-center p-4">

                       <HiViewList className="text-3xl text-[#028E81]"/>

          <Image
              src="/logo.webp"
              alt="logo"
              width={120}
              height={120}
              className="
                w-[60px] h-[60px] "
            />

</div>

        </div>
      </div>

<div className="hidden md:block">
      <nav className="relative h-16 bg-[#028E81] text-white flex md:gap-8 lg:gap-10 xl:gap-16 justify-center items-center p-4 ">
        <div>
          <Logo/>
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
      </div>
    </header>
  )
}
