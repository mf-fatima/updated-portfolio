"use client";

import Link from "next/link";
import { Button } from "./ui/button";

// Import Swiper React component

import { Swiper, SwiperSlide } from "swiper/react";

// Importing swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Importing required Modules
import { Pagination } from "swiper/modules";

// Importing components
import ProjectCard from "./ProjectCard";

const ProjectData = [
  {
    image: "/work/foodrent.png",
    category: "mobile app",
    name: "Food & Rental App",
    description:
      "A mobile app for students and workers to find home-cooked meals and rooms for rent.",
    link: "https://github.com/mf-fatima",
    github: "https://github.com/mf-fatima",
  },
  {
    image: "/work/shopsy.png",
    category: "wordpress",
    name: "Clothing Store",
    description:
      "A WordPress e-commerce store with modern UI, product browsing, and payment-ready shopping flows.",
    link: "https://www.youtube.com/",
    github: "https://github.com/mf-fatima",
  },
  {
    image: "/work/hms.png",
    category: "desktop app",
    name: "Hospital Management System",
    description:
      "A C# desktop application for hospital workflow automation and management tasks.",
    link: "https://github.com/mf-fatima",
    github: "https://github.com/mf-fatima",
  },
  {
    image: "/work/buffer.jpg",
    category: "react js",
    name: "Buffer Clone",
    description:
      "A responsive Buffer website clone built with HTML, Tailwind CSS, and JavaScript.",
    link: "https://buffer-clone-tawny.vercel.app",
    github: "https://github.com/mf-fatima",
  },
  {
    image: "/work/todo.png",
    category: "react js",
    name: "To-Do App",
    description:
      "A responsive To-Do app with task management, progress tracking, and dark/light mode.",
    link: "https://my-to-do-app-pi.vercel.app",
    github: "https://github.com/mf-fatima",
  },
  {
    image: "/work/travel.png",
    category: "mern stack",
    name: "Travel Blogging Website",
    description:
      "A full-stack travel blogging platform where users can create, read, and manage travel blogs.",
    link: "https://github.com/mf-fatima/travel_blog-frontend",
    github: "https://github.com/mf-fatima/travel-blog-backend",
  },
  {
    image: "/work/ecom.png",
    category: "mern stack",
    name: "Multi-Vendor E-commerce",
    description:
      "A MERN e-commerce platform with secure authentication, product, cart, and order management.",
    link: "https://github.com/mf-fatima/ecommerce-frontend",
    github: "https://github.com/mf-fatima/my_ecommerce_backened",
  },
  {
    image: "/work/blood.png",
    category: "mern stack",
    name: "LifeFlow Smart Blood Bank",
    description:
      "LifeFlow is a blood management system for tracking stock, scheduling donations, and managing appointments efficiently.",
    link: "https://lifeflow-frontend-client.vercel.app/",
    github: "https://lifeflow-frontend-client.vercel.app/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* Texts */}
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Check out my recent work across web, mobile, WordPress, desktop,
            and MERN stack applications.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className=" sm:h-[520px] h-[570px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {ProjectData.map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
