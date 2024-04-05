import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5"; 

const ProjectCard = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img 
            className="rounded-t-lg" 
            src="/coding.gif" 
            alt="logo" />
      </a>
      <div className="p-5">
        <h5>MERN Stack</h5>
        <Link href="">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            BuyFresh-Ecommerce Website
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <Link
          href=""
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
         View Project
         <IoArrowForwardOutline className="ml-2 text-base md:text-xl"/>
        </Link>
        <p className="mt-2">06-04-2024</p>
      </div>
      
    </div>
  );
};

export default ProjectCard;
