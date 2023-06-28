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
    <div className="cs-container">
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
              Thanks for visiting my portfolio. My Name is Md. Abir mahmud. I am
              from satkhira, Bangladesh. Currently i am pursuing my Bachelor
              degree. At the same time, i am a skilled react developer. I have
              completed so many fullstack projects with react.js and node.js. I
              hardly confident on my skills and ready to get hired.
            </p>
            <p className="mt-10 font-inter text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ut
              similique natus odit. Odit nulla beatae nostrum eaque. Laudantium,
              numquam tenetur provident, illum aliquam dolores fugit,
              perferendis at repudiandae quis voluptas nemo. Commodi vitae saepe
              rerum optio ipsum impedit animi repellendus voluptate aut!
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
