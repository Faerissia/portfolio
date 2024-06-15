"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/1.png",
    category: "node.js",
    name: "Sport Management of RMUTT Games",
    description: "เว็บแอปพลิเคชันจัดการแข่งขันกีฬาราชมงคลธัญบุรีเกมส์",
    link: "https://github.com/Faerissia/Sport-management-of-RMUTT-Games",
    github: "https://github.com/Faerissia/Sport-management-of-RMUTT-Games",
  },
  {
    image: "/work/2.png",
    category: "node.js",
    name: "Mobile API RMUTT Games",
    description:
      "API สำหรับ แอปพลิเคชันจัดการแข่งขันกีฬาราชมงคลธัญบุรีเกมส์ บน Android",
    link: "https://github.com/Faerissia/Mobile-Api-RMUTT-Games",
    github: "https://github.com/Faerissia/Mobile-Api-RMUTT-Games",
  },
  {
    image: "/work/3.png",
    category: "flutter",
    name: "Mobile Client RMUTT Games (APK)",
    description:
      "Client แอปพลิเคชันจัดการแข่งขันกีฬาราชมงคลธัญบุรีเกมส์ ของ Android",
    link: "https://github.com/Faerissia/Mobile-Client-Rmutt-APK",
    github: "https://github.com/Faerissia/Mobile-Client-Rmutt-APK",
  },
  {
    image: "/work/6.png",
    category: "next.js",
    name: "Employee Management Front-End",
    description: "เว็บแอปพลิเคชันระบบจัดการพนักงาน",
    link: "https://github.com/Faerissia/Employee-Management-Front-End",
    github: "https://github.com/Faerissia/Employee-Management-Front-End",
  },
  {
    image: "/work/4.png",
    category: "node.js",
    name: "Dragon's Dice Bot",
    description: "บอทช่วย DM คำนวณ Reward (งานอดิเรก)",
    link: "https://github.com/Faerissia/Dragon-s-Dice-Bot",
    github: "https://github.com/Faerissia/Dragon-s-Dice-Bot",
  },
  {
    image: "/work/5.png",
    category: "react.js",
    name: "Portfolio",
    description:
      "เว็บไซต์ Portfolio สำหรับแสดงข้อมูลตัวเอง, ผลงาน, งานที่เคยทำ",
    link: "https://github.com/Faerissia/portfolio",
    github: "https://github.com/Faerissia/portfolio",
  },
  {
    image: "/work/7.png",
    category: "node.js",
    name: "Employee Management Front-End",
    description: "API ระบบจัดการพนักงาน",
    link: "https://github.com/Faerissia/Employee-Management-Back-End",
    github: "https://github.com/Faerissia/Employee-Management-Back-End",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
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
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList
            className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px]
          mb-12 mx-auto md:border dark:border-none"
          >
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
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
