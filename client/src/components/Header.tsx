import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="text-gray-600 body-font fixed z-50 bg-black w-full ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <Image
            src={"/logo.jpg"}
            alt="main-logo"
            height="50"
            width="300"
            className="md:w-40 lg:w-full"
          />
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base md:text-lg gap-2 md:gap-8 justify-center text-gray-400 ">
          <Link
            href="/"
            className="mr-5 hover:text-cyan-400  hover:shadow-cyan-400 hover:drop-shadow-lg hover:translate-y-1 hover:scale-110 hover:transition-transform hover:duration-700 hover:ease-in-out   "
          >
            Home
          </Link>
          <Link
            href="/project"
            className="mr-5 hover:text-cyan-400 hover:shadow-cyan-400 hover:drop-shadow-lg hover:translate-y-1 hover:scale-110 hover:transition-transform hover:duration-700 hover:ease-in-out  "
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className="mr-5 hover:text-cyan-400 hover:shadow-cyan-400 hover:drop-shadow-lg hover:translate-y-1 hover:scale-110 hover:transition-transform hover:duration-700 hover:ease-in-out  "
          >
            Contact Us
          </Link>

          <a download href="Resume.pdf">
            <button className="hidden md:inline-flex text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded-full text-lg hover:shadow-cyan-400 hover:drop-shadow-lg hover:translate-y-1 hover:scale-110 hover:transition-transform hover:duration-700 hover:ease-in-out  ">
              Resume
            </button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
