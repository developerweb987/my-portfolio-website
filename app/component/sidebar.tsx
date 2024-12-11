import Image from "next/image";
import React from "react";
import { Envelope, Twitter, Linkedin, Instagram } from "./icons";

// Define the props interface
interface SidebarProps {
  data: {
    name: string;
    role: string;
    education: string[]; // Assuming education is an array of strings
    contactLinks: (string | undefined)[]; // Assuming contactLinks is an array of URLs or undefined
  };
}

const Sidebar: React.FC<SidebarProps> = ({ data }) => {
  const { name, role, education, contactLinks } = data;

  return (
    <div className="bg-blue-950 flex flex-col content-between w-full h-auto sm:h-screen sm:justify-around sm:w-1/3 sm:fixed">
      <div className="text-white flex flex-col p-10 items-center">
        <Image
          priority
          width={300}
          height={300}
          className="rounded-full h-full mb-6"
          src="/images/profile-cv.jpg"
          alt="profile-cv.jpg"
          aria-label="profile-cv.jpg"
        />
        <h1 className="mb-2 text-5xl">{name}</h1>
        <h2 className="mb-8">{role}</h2>
        <p className="mb-2">{education[0]}</p>
        <p className="mb-2">{education[1]}</p>
        <div className="text-white text-center mb-4 mt-4 sm:mt-8">
          <h3 className="mb-2">CONTACT ME</h3>
          <div className="flex flex-row justify-center gap-2">
            <a
              className="icons-contactme"
              href={contactLinks?.[0]}
              aria-label={"email link"}
            >
              <Envelope className="w-6 h-6" />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[1]}
              aria-label={"twitter link"}
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[2]}
              aria-label={"linkedin link"}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[3]}
              aria-label={"instagram link"}
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
