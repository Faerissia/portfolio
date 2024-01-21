"use client";

import {
  RiYoutubeFill,
  RiDiscordFill,
  RiGithubFill,
  RiFacebookBoxFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.youtube.com/channel/UCDQAhWX6wbrMrVGRLCKRbjQ",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://discordapp.com/users/im.faeris",
    name: <RiDiscordFill />,
  },
  {
    path: "https://github.com/Faerissia",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com/FAERISSIA",
    name: <RiFacebookBoxFill />,
  },
  {
    path: "https://www.instagram.com/faeris_z/",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
