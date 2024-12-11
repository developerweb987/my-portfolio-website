"use client";
import React, { useState } from "react";

// Define the structure of props
interface Skill {
  icon: React.ReactNode; // Icon can be any TSX element
  text: string;
}

interface SkillsProps {
  data: {
    soft: Skill[]; // Array of soft skills
    hard: Skill[]; // Array of hard skills
  };
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<"soft" | "hard">("soft");

  // Functions to determine button background and alignment
  const setBg = (active: "soft" | "hard") =>
    activeTab === active ? "bg-yellow" : "bg-grey";

  const setTabsAlignment = (tab: "soft" | "hard") =>
    tab === "soft" ? "text-left" : "text-right";

  // Tabs for toggling between soft and hard skills
  const tabs = (
    <div className="flex">
      {["soft", "hard"].map((el) => (
        <button
          key={el}
          type="button"
          className={`btn ${setBg(el as "soft" | "hard")} ${setTabsAlignment(
            el as "soft" | "hard"
          )}`}
          onClick={() => setActiveTab(el as "soft" | "hard")}
        >
          {el} Skills
        </button>
      ))}
    </div>
  );

  // Content to display skills
  const content = (
    <ul
      className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${
        activeTab === "soft" ? "justify-start" : "justify-end"
      }`}
    >
      {data[activeTab].map(({ icon, text }) => (
        <li key={text} className="skill">
          <span>{icon}</span> {text}
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      {tabs}
      {content}
    </div>
  );
};

export default Skills;
