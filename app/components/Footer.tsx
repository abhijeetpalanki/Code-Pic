"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-center gap-10 py-16">
      <Link
        className="text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
        href="https://github.com/abhijeetpalanki"
      >
        View More Projects &nbsp;&#129109;
      </Link>
      <Link
        className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
        href="https://github.com/abhijeetpalanki"
      >
        <span className="pr-2">Made by</span>
        <Image src="/logo.jpg" alt="logo" width={20} height={20} />
        <span className="pl-1 font-medium text-slate-200">
          Abhijeet Palanki
        </span>
      </Link>
    </div>
  );
};

export default Footer;
