import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";
import { urlFor } from "@/sanity/client";
import Image from "next/image";
const ProjectCard = ({
  thumbnail,
  projectLanguage,
  projectTitle,
  description,
  date,
  websiteurl,
}: any) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Image
        className="rounded-t-lg"
        src={urlFor(thumbnail).url()}
        alt="logo"
        width={400}
        height={700}
      />

      <div className="p-5">
        <h5>{projectLanguage}</h5>
       
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {projectTitle}
          </h5>
        
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <Link
          href={websiteurl}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          target="_blank"
        >
          View Project
          <IoArrowForwardOutline className="ml-2 text-base md:text-xl" />
        </Link>
        <p className="mt-2">{date}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
