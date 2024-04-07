"use client"
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <section className="text-gray-400 bg-black body-font pt-36">
      <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center sm:order-2">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/ sm:order-1 mb-6">
          <Image
            className="object-cover object-center rounded shadow-cyan-200 shadow-lg drop-shadow-lg"
            alt="gif here"
            src={"/coding.gif"}
            width={420}
            height={600}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="text-sm md:text-2xl flex flex-col flex-wrap gap-2">
            <p className="text-sm md:text-2xl">Hello, I&apos;m</p>
            <p className="text-2xl md:text-7xl font-medium space-x-1 ">
              Faraaz Ashraf
            </p>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "a MERN Stack Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Software Engineer",
                1000,
                
              ]}
              wrapper="span"
              className="text-red-500 my-6 md:text-2xl "
              speed={10}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
          <p className="mb-8 leading-relaxed mt-2 text-base md:text-lg">
            With a passion for crafting innovative solutions, I&apos;ve honed my
            skills in a variety of cutting-edge technologies. From mastering
            Next.js and TypeScript to leveraging the power of Sanity and
            Appwrite. I&apos;ve cultivated hands-on experience in developing
            robust web applications. Whether it&apos;s architecting seamless
            user experiences with Next.js or optimizing code efficiency with
            TypeScript, I&apos;m dedicated to delivering top-notch solutions
            tailored to meet the unique needs of each project.
          </p>
          <div className="flex justify-center">
            <a download href='Resume.pdf'>
            <button className="md:hidden sm:inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Resume
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
