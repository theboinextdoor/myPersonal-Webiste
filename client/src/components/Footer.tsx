import Image from "next/image";
import Link from "next/link";
import React from "react";

import { LuFacebook } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <Image src={"/logo.jpg"} alt="main-logo" height="50" width="300" />
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 ">
          © 2024 Portfolio Website —
          <Link
            href="https://twitter.com/knyttneve"
            className="text-gray-600 ml-1 cursor-pointer hover:text-cyan-400"
            rel="noopener noreferrer"
            target="_blank"
          >
            FaraazAshraf
          </Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-8 text-2xl text-white">
          <LuFacebook className="cursor-pointer hover:text-cyan-400 hover:shadow-cyan-400 hover:shadow-xl hover:drop-shadow-xl hover:translate-y-1 hover:scale-150 hover:ease-in-out hover:duration-700 hover:transition-transform"/>
          <BsTwitterX className="cursor-pointer hover:text-cyan-400 hover:shadow-cyan-400 hover:shadow-xl hover:drop-shadow-xl hover:translate-y-1 hover:scale-150 hover:ease-in-out hover:duration-700 hover:transition-transform"/>
          <SlSocialInstagram className="cursor-pointer hover:text-cyan-400 hover:shadow-cyan-400 hover:shadow-xl hover:drop-shadow-xl hover:translate-y-1 hover:scale-150 hover:ease-in-out hover:duration-700 hover:transition-transform"/>
          <GrLinkedinOption className="cursor-pointer hover:text-cyan-400 hover:shadow-cyan-400 hover:shadow-xl hover:drop-shadow-xl hover:translate-y-1 hover:scale-150 hover:ease-in-out hover:duration-700 hover:transition-transform"/>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
