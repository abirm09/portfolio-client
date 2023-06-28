import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import usePortfolioContext from "../../../Hooks/usePortfolioContext";

const Skills = () => {
  const { isDark } = usePortfolioContext();
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("/skills.json")
      .then(res => res.json())
      .then(data => setSkills(data));
  }, []);
  return (
    <div className="cs-container mt-24">
      <SectionTitle title="Skills" />
      <div className="mt-10">
        <div className="flex justify-center gap-5 flex-wrap">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className={`text-center w-56 h-64 ring-1 ${
                isDark ? "ring-slate-800" : "ring-slate-400/60"
              } p-10 bg-slate-600/20 backdrop-blur-[10px] rounded-lg shadow-lg font-inter hover:scale-105 transition-all ease-in select-none`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={skill.img} alt={skill.name} className="w-28 mx-auto" />
              <h2 className="font-semibold text-2xl mt-2">{skill.name}</h2>
              <p>{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ipsa ad
        similique obcaecati eaque, deleniti repellendus reiciendis laudantium ea
        impedit veritatis facere fugit? Sed, repudiandae? Obcaecati sunt facilis
        ipsam quasi.
      </p>
    </div>
  );
};

export default Skills;
