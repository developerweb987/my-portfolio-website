import React, { useId } from "react";
import Skills from "./skills";

// Define props interface
interface AboutMeProps {
  data: {
    title: string;
    body: string[];
  };
  skills: any; // Replace 'any' with a specific type if you know the structure of `skills`
}

const AboutMe: React.FC<AboutMeProps> = ({ data, skills }) => {
  const { title, body } = data;
  const id = useId();

  return (
    <section>
      <h2 className="mb-8 font-semibold">{title}</h2>
      {body?.map((el, i) => (
        <p key={`${id}_${i}`} className="mb-6">
          {el}
        </p>
      ))}
      <Skills data={skills} />
    </section>
  );
};

export default AboutMe;
