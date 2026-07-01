"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { CardContent } from "@/components/ui/card";

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
];

// Filtered Projects

// Remove categories duplicates

const uniquecategories = [
  "all projects",
  ...new Set(ProjectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniquecategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = ProjectData.filter((project) => {
    // If category is all projects
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="flex h-auto w-full max-w-[1100px] flex-wrap gap-3 rounded-[24px] p-3 mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  className="capitalize min-w-[150px] flex-1 px-5"
                  value={category}
                  key={index}
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* Tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
