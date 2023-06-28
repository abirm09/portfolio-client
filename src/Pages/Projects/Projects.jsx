import { Link } from "react-router-dom";
import usePortfolioContext from "../../Hooks/usePortfolioContext";
import useProjects from "../../Hooks/useProjects";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaServer } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { BsCodeSlash } from "react-icons/bs";
const Projects = () => {
  const projects = useProjects();
  const { isDark } = usePortfolioContext();
  return (
    <div className="cs-container mt-20">
      <SectionTitle title="Projects" />
      <div className="flex justify-evenly flex-wrap gap-10 mt-10">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`w-[500px] h-[450px] md:h-[580px] p-5 ${
              isDark ? "ring-slate-800" : "ring-slate-400/60"
            } p-5 bg-slate-600/20 backdrop-blur-[10px] rounded-lg shadow-md`}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div
              className="w-full h-48 md:h-80 bg-top hover:bg-bottom rounded-lg"
              style={{
                backgroundImage: `url('${project.screenshots[0]}') `,
                backgroundSize: "cover",
                transition: "all linear 3s",
              }}
            ></div>
            <h2 className="mt-3 font-inter text-xl font-bold">
              {project.name}
            </h2>
            <p className="mt-2">{project.description}</p>
            <div className="flex justify-end mt-2">
              <Link
                to={`/project/${project.name}`}
                className="cs-backdrop-btn hover:scale-105 transition-all"
              >
                Details
              </Link>
            </div>
            <hr className="mt-3 border-base-300" />
            <ul className="flex justify-center gap-5 mt-5">
              <li className="hover:scale-110 transition-all">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.live_site}
                  title="Live site"
                >
                  <TbWorld className="w-6 h-6" />
                </a>
              </li>
              <li className="hover:scale-110 transition-all">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.client}
                  title="Client side code"
                >
                  <BsCodeSlash className="w-6 h-6" />
                </a>
              </li>
              {project.server ? (
                <>
                  <li className="hover:scale-110 transition-all">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={project.server}
                      title="Server side code"
                    >
                      <FaServer className="w-6 h-6" />
                    </a>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
