// "use client"
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import { client } from "@/sanity/client";
// import { SanityDocument } from "next-sanity";

interface IProject {
  _id: string;
  thumbnail: string;
  projectTitle: string;
  projectLanguage: string;
  description: any;
  date: string;
  websiteurl: string;
}

async function getData() {
  try {
    const query = `*[_type == "project"]`;
    const data = await client.fetch(query);
    return data as IProject;
  } catch (error) {
    console.log(error);
  }
}

const ProjectPage = async () => {
  const data = (await getData()) as unknown as IProject[];
  return (
    <section className="text-gray-600 body-font pt-14">
      <div className="container px-5 pt-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20  p-10">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0 flex flex-col align-middle items-center justify-cente ">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-300">
              My Hardworks
            </h1>

            <div className="h-1 w-32 bg-cyan-500 rounded mb-10" />
            <Image
              src={"/projectPage.gif"}
              alt="Project page"
              width={520}
              height={400}
            />
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-400">
            Welcome to the Projects page of my portfolio website, dedicated to
            showcasing my expertise in MERN stack development! <br />
            Here, you&apos;ll find a curated selection of projects that
            highlight my proficiency in building dynamic and scalable web
            applications using MongoDB, Express.js, React.js, and Node.js (MERN
            stack). <br /> <br />
            Each project listed here demonstrates my ability to leverage the
            full potential of MERN stack technologies to create robust,
            feature-rich applications. From e-commerce platforms to social
            networking sites, each project showcases the versatility and power
            of the MERN stack. <br /> <br />
            Explore the projects to see how I&apos;ve utilized MongoDB for
            flexible and efficient data storage, Express.js for building robust
            backend APIs, React.js for creating interactive user interfaces, and
            Node.js for handling server-side logic. <br /> <br /> Whether
            you&apos;re interested in browsing through the codebase, exploring
            the features, or simply getting inspired by the possibilities of
            MERN stack development, this Projects page is the perfect
            destination. <br /> <br /> Feel free to dive into any project that
            catches your interest, and don&apos;t hesitate to reach out if you
            have any questions or feedback. I&apos;m excited to share my MERN
            stack journey with you!
          </p>
        </div>
      </div>
      <div className="flex flex-wrap px-4 mx-4 items-center justify-center gap-6">
        {data?.map((val: any, index: any) => {
          return (
            <ProjectCard
              key={index}
              thumbnail={val.thumbnail}
              projectLanguage={val.projectLanguage}
              projectTitle={val.projectTitle}
              description={val.description}
              date={val.date}
              websiteurl={val.websiteurl}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectPage;
