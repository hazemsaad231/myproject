
"use client";

import { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaArrowDown } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiViewList } from "react-icons/hi";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { Context } from "../../Context/context"; 
import Logo, { SmallLogo } from "./logo";

export default function Header() {
  const { active, setActive } = useContext(Context || {});
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);

  const toggleNavbar = () => setNavbarVisible((s) => !s);
  const handleBg = (l) => {
    if (setActive) setActive(l);
  };

  return (
    <header className="relative z-50">
      <div className="h-24 md:h-14 w-full bg-white flex justify-end items-center">
        <div className="hidden md:flex items-center gap-2 p-8">
          <FaFacebook className="text-xl text-[#028E81]" />
          <FaXTwitter className="text-xl text-[#028E81]" />
        </div>

        {/* mobile bar */}
        <div className="lg:hidden">

          <div className="w-[100vw] flex justify-between items-center p-6">
            <div>
              {isNavbarVisible ? (
                <MdOutlineCancelPresentation
                  className="text-2xl mt-1 cursor-pointer text-[#028E81]"
                  onClick={toggleNavbar}
                />
              ) : (
                <HiViewList
                  className="text-2xl mt-1 cursor-pointer text-[#028E81]"
                  onClick={toggleNavbar}
                />
              )}
            </div>

            {/* logo */}
            <div className="relative">
              <Image
                src="/logo.webp"
                alt="logo"
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] h-[60px] object-contain"
              />
            </div>
          </div>


        </div>
      </div>

      {/* desktop navbar */}
      <div className="hidden lg:block">
        <nav className="relative h-16 bg-[#028E81] text-white flex md:gap-8 lg:gap-10 xl:gap-28 justify-center items-center p-4">
          <div>
            {Logo ? <Logo /> : <div className="text-white font-bold">TAQRIB</div>}
          </div>

          <ul className="flex gap-8 text-lg font-semibold">
            <li onClick={() => handleBg("home")}>
              <Link href="/" className={`hover:text-amber-500 ${active === "home" ? "text-amber-400" : ""}`}>
                الرئيسية
              </Link>
            </li>
            <li onClick={() => handleBg("about")}>
              <Link href="/about" className={`hover:text-amber-500 ${active === "about" ? "text-amber-400" : ""}`}>
                منصه تقريب
              </Link>
            </li>

            {/* dropdown */}
            <li className="relative group cursor-pointer" onClick={() => handleBg("services")}>
              <div className={`flex items-center gap-1 mb-2 ${active === "services" ? "text-amber-400" : ""}`}>
                <span>الواقع الاجتماعي في اليمن</span>
                <FaArrowDown />
              </div>

              <ul className="absolute right-0 top-full w-60 bg-[#028E81] hidden group-hover:block z-50 rounded-b-md shadow-md">
                <li
                  className="px-4 py-2 hover:bg-white/10"
                  onClick={() => {
                    if (setActive) setActive("work-news");
                  }}
                >
                  <Link href="/work-news">اخبار العمل الخيري</Link>
                </li>
                <li className="px-4 py-2 hover:bg-white/10">
                  <Link href="/reports">الدراسات والتقارير</Link>
                </li>
              </ul>
            </li>

            <li onClick={() => handleBg("associations")}>
              <Link href="/associations" className={`hover:text-amber-400 ${active === "associations" ? "text-amber-400" : ""}`}>
                دليل الجمعيات
              </Link>
            </li>
            <li onClick={() => handleBg("blog")}>
              <Link href="/blog" className={`hover:text-amber-400 ${active === "blog" ? "text-amber-400" : ""}`}>
                مدونة تقريب
              </Link>
            </li>
            <li onClick={() => handleBg("contact")}>
              <Link href="/contact" className={`hover:text-amber-400 ${active === "contact" ? "text-amber-400" : ""}`}>
                تواصل معنا
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navbar*/}
      {isNavbarVisible && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={toggleNavbar}
          />

          <div className="absolute right-0 top-0 z-50 w-full bg-white shadow-2xl overflow-y-auto transform transition-transform">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
               <SmallLogo/>
              </div>

              <button
                onClick={toggleNavbar}
                aria-label="close menu"
                className="p-2 rounded-md text-[#028E81] hover:bg-gray-100"
              >
                <MdOutlineCancelPresentation className="text-2xl" />
              </button>
            </div>

            <nav className="px-4 z-20">
              <ul className="flex flex-col">
                <li className="text-center text-[#28b896] font-semibold mb-4 text-lg" onClick={toggleNavbar}>
                <Link href="/">الرئيسية</Link></li>

                <li className="border-t border-gray-500 py-4">
                  <Link href="/about" onClick={toggleNavbar} className="block text-center text-gray-700">
                    منصه تقريب
                  </Link>
                </li>

                <li className="border-t border-gray-500 py-4">
                  {/* expandable submenu */}
                  <button
                    className="w-full text-left flex items-center justify-center gap-1 text-gray-700"
                    onClick={() => setMobileSubOpen((s) => !s)}
                  >
                    <span>الواقع الاجتماعي في اليمن</span>
                    <FaArrowDown className={`text-sm text-gray-500 transition-transform ${mobileSubOpen ? "rotate-180" : ""}`} />
                  </button>

                  {/* mobile sublist */}
                  {mobileSubOpen && (
                    <ul className="mt-2 bg-white">
                      <li className="px-4 py-3 border-t border-gray-500 text-center" onClick={() => { toggleNavbar(); }}>
                        <Link href="/work-news" className="block text-gray-600">اخبار العمل الخيري</Link>
                      </li>
                      <li className="px-4 py-3 border-t border-gray-500 text-center" onClick={() => { toggleNavbar(); }}>
                        <Link href="/reports" className="block text-gray-600">الدراسات والتقارير</Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="border-t border-gray-500 py-4">
                  <Link href="/associations" onClick={toggleNavbar} className="block text-center text-gray-700">
                    دليل الجمعيات
                  </Link>
                </li>

                <li className="border-t border-gray-500 py-4">
                  <Link href="/blog" onClick={toggleNavbar} className="block text-center text-gray-700">
                    مدونة تقريب
                  </Link>
                </li>

                <li className="border-t border-gray-500 py-4">
                  <Link href="/contact" onClick={toggleNavbar} className="block text-center text-gray-700">
                    تواصل معنا
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
