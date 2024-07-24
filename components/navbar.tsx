"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white  h-[70px] w-full fixed z-20 text-slate-900 p-4 flex justify-between items-center shadow-lg">
      <div className=" pl-10">
        <Link href="/">
        <Image src="/images/samuari.png" alt="hfhf" width={40} height={0}/>
        </Link>
      </div>
      <div className="md:hidden" onClick={toggleMenu}>
        {!isOpen ? (
          <button className="text-2xl focus:outline-none">☰</button>
        ) : (
          <button className="scale-[2] pr-1">&times;</button>
        )}
      </div>
      <ul
        className={`navbar_shadow_left transition-all duration-300 md:flex md:relative absolute bg-white p-5 md:p-0 right-0 h-[calc(100vh-65px)] md:h-full top-16 md:top-0 md:items-center md:space-x-6 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <li className="mt-2 md:mt-0 transition-all hover:bg-gray-200 md:py-2 md:px-2 px-8 py-3 rounded-md">
          <Link href="/">Home</Link>
        </li>
        <li className="mt-2 md:mt-0 transition-all hover:bg-gray-200 md:py-2 md:px-2 px-8 py-3 rounded-md">
          <Link href="/about">About</Link>
        </li>
        <li className="mt-2 md:mt-0 transition-all hover:bg-gray-200 md:py-2 md:px-2 px-8 py-3 rounded-md">
          <Link href="/course">Courses</Link>
        </li>
        <li className="mt-2 md:mt-0 transition-all hover:bg-gray-200 md:py-2 md:px-2 px-8 py-3 rounded-md">
          <Link href="/internship">Internship</Link>
        </li>
        <li className="mt-2 md:mt-0 transition-all hover:bg-gray-200 md:py-2 md:px-2 px-8 py-3 rounded-md">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
