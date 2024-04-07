"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";

const ContactPage = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [sentformData , setSentFormData] = useState(false)

  const handleFormInputs = (e: React.FormEvent)=> {
    e.preventDefault();
    const formData = {
      nameRef : nameRef.current?.value || "",
      emailRef : emailRef.current?.value || "",
      messageRef : messageRef.current?.value || ""
    }


  }

  const handleButton = (e:any) => {
    e.preventDefault();
    setSentFormData((prev) => !prev)

  }
  return (
    <section className="text-gray-400 bg-black body-font relative pt-24">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap justify-center">
        <div className="lg:w-full md:w-full md:h-screen h-screen bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62241.306348126665!2d77.63291195662092!3d12.838000415150558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c8a7750e1c3%3A0x4a5cfc0fce5af71d!2sElectronic%20City%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1712332705544!5m2!1sen!2sin"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16)" }}
          />

          <div className="bg-gray-900  relative   flex flex-wrap py-6 rounded shadow-md justify-center items-center">
            <div className="lg:w-1/2 px-10 m-auto">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Electronic City , Bengaluru
                <br />
                Karnataka , 560100
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                href="mailto:farazashraf1523@gmail.com"
                target="_blank"
                className="text-indigo-400 leading-relaxed cursor-pointer active:text-cyan-400"
              >
                faraazashraf1523@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">8210111482</p>
            </div>
          </div>
        </div>
          {/* <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-white text-lg md:text-xl mb-1 font-medium title-font">
              Feel free to ask
            </h2>
            <p className="leading-relaxed mb-5">
              Do you have any queries or questions related to our services or
              anything else? We&apos;re here to help! and we&apos;ll do our best
              to provide you with the information you need.
            </p>
        <form onSubmit={handleFormInputs}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                ref={nameRef}
                id="name"
                name="name"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                ref={emailRef}
                id="email"
                name="email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400"
              >
                Message
              </label>
              <textarea
                ref={messageRef}
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              onClick={handleButton}
              className="text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded-full text-lg w-full active:bg-cyan-400">
              Submit
            </button>
        </form>
            <div className="flex items-center justify-center">
              <p className="text-md text-gray-400 text-opacity-90 mt-3">
                Until next time, take care and stay safe!
              </p>
            </div>
          </div> */}
      </div>
    </section>
  );
};

export default ContactPage;
