import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Nontaphat",
  },
  {
    icon: <MailIcon size={20} />,
    text: "nontaphat.r@gmail.com",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "BangPong, Ratchaburi",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Major in Computer Engineering",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 26 May, 2000",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Rajamangala University of Technology Thanyaburi",
        qualification: "Bachelor of Engineering",
        years: "2020 - 2023",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "National Science and Technology Development Agency",
        qualification: "Computer Engineer",
        years: "2022 - 2022",
      },
    ],
  },
];

const SkillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML,CSS",
      },
      {
        name: "Back-end Development",
      },
      {
        name: "Javascript,Typescript",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/html.svg",
      },
      {
        imgPath: "/about/css.svg",
      },
      {
        imgPath: "/about/javascript.svg",
      },
      {
        imgPath: "/about/typescript.svg",
      },
      {
        imgPath: "/about/node-js.svg",
      },
      {
        imgPath: "/about/mysql.svg",
      },
      {
        imgPath: "/about/docker.svg",
      },
      {
        imgPath: "/about/postman.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title == title);
  };

  return (
    <section className="xl:h-[860px] ph-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer-faeris.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg my-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">personal info</TabsContent>
                <TabsContent value="qualifications">
                  qualifications info
                </TabsContent>
                <TabsContent value="skills">skills info</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
