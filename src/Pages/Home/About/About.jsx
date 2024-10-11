import { useEffect, useState } from "react";
import usePortfolioContext from "../../../Hooks/usePortfolioContext";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const About = () => {
  const { isDark } = usePortfolioContext();
  const [personality, setPerSonality] = useState([]);
  useEffect(() => {
    fetch("/personality.json")
      .then(res => res.json())
      .then(data => setPerSonality(data));
  }, []);
  return (
    <div className="cs-container" id="about">
      <div
        className={`bg-base-200/20 backdrop-blur-[10px] p-3 md:p-10 ring-1 ${
          isDark ? "ring-slate-900" : "ring-slate-300"
        } rounded-lg`}
        data-aos="fade-up"
      >
        <SectionTitle title="About me"></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
          <div>
            <p className="font-inter text-justify">
              Hi,
              <br />
              This is MD Abir mahmud from satkhira, Bangladesh. I am pursuing my
              Bachelor&apos;s degree while simultaneously being a skilled Junior
              Full-stack developer. I have completed many full-stack projects
              with Next.js and Node.js. I am fully confident in my skills and my
              ability to get hired.
            </p>
            <p className="mt-5 font-inter text-justify">
              Presently, I am learning new advanced technologies and doing
              industry-standard projects with some of my friends to gain
              experience in team projects.
            </p>
            <p className="mt-10 font-inter text-justify">
              Thanks for visiting.
            </p>
          </div>
          <div>
            <div className="flex flex-wrap gap-10 justify-center md:justify-end">
              {personality.map((item, index) => (
                <div
                  key={item.id}
                  className={`text-center w-56 h-56 ring-1 ${
                    isDark ? "ring-slate-800" : "ring-slate-400/60"
                  } p-10 bg-slate-600/20 backdrop-blur-[10px] rounded-lg shadow-lg`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-28 mx-auto"
                  />
                  <h2 className="text-xl font-inter font-semibold mt-2">
                    {item.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
