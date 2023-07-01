import Marquee from "react-fast-marquee";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useEffect } from "react";
import { useState } from "react";
import usePortfolioContext from "../../Hooks/usePortfolioContext";

const Tools = () => {
  const { isDark } = usePortfolioContext();
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("/tools.json")
      .then(res => res.json())
      .then(data => setTools(data));
  }, []);
  return (
    <div className="cs-container mt-20">
      <SectionTitle title="Tools" />
      <Marquee className="mt-10" pauseOnHover>
        {tools.map(tool => (
          <div
            key={tool.id}
            className={` ml-5 p-5 rounded-md backdrop-blur-md border-[1px]  ${
              isDark
                ? "border-slate-600 bg-slate-600/20"
                : "border-slate-200 bg-slate-300/20"
            }`}
          >
            <div className="w-48 flex items-center gap-5 font-inter">
              <img src={tool.img} className="w-14" alt={tool.name} />
              <h2 className="text-xl">{tool.name}</h2>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Tools;
