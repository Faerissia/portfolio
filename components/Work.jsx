"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import ProjectCard from "./ProjectCard";

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
    image: "/work/7.png",
    category: "node.js",
    name: "Employee Management Front-End",
    description: "API ระบบจัดการพนักงาน",
    link: "https://github.com/Faerissia/Employee-Management-Back-End",
    github: "https://github.com/Faerissia/Employee-Management-Back-End",
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
    image: "/work/4.png",
    category: "node.js",
    name: "Dragon's Dice Bot",
    description: "บอทช่วย DM คำนวณ Reward (งานอดิเรก)",
    link: "https://github.com/Faerissia/Dragon-s-Dice-Bot",
    github: "https://github.com/Faerissia/Dragon-s-Dice-Bot",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div
          className="max-w-[400px] mx-auto xl:ml-0 text-center 
        xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start"
        >
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">Projects ต่างๆที่เคยทำมา</p>
          <Link href="/projects">
            <Button>All project</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
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
            {/* show only the first 4 projects */}
            {projectData.slice(0, 4).map((project, index) => {
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
