import { useNavigate, useParams } from "react-router-dom";
import useProjects from "../../Hooks/useProjects";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FiArrowLeft } from "react-icons/fi";
import LazyLoad from "react-lazy-load";
const SingleProject = () => {
  const param = useParams();
  const projects = useProjects();
  const currentProject =
    projects.find(project => project.name === param.projectName) || {};
  const navigate = useNavigate();
  return (
    <div className="cs-container mt-10">
      <div className="mt-5 mb-5">
        <span
          onClick={() => navigate(-1)}
          className={`cursor-pointer bg-base-200 ring-1 ring-slate-600 h-10 w-10 flex justify-center items-center rounded-full`}
          title="Back"
        >
          <FiArrowLeft className="w-6 h-6" />
        </span>
      </div>
      <SectionTitle title="Project details" />
      <div className="mt-10 font-inter">
        <h2 className="text-2xl">
          Project name :{" "}
          <span className="font-semibold">{currentProject.name}</span>
        </h2>
        <h3>{currentProject.description}</h3>
        <div className="mt-5 space-y-1">
          <h3>
            Live site :{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href={currentProject.live_site}
              title="Live site"
            >
              {currentProject.live_site}
            </a>
          </h3>
          <h3>
            Client side github repo :{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href={currentProject.client}
              title="Client side"
            >
              {currentProject.client}
            </a>
          </h3>
          {currentProject.server ? (
            <h3>
              Server side github repo :{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href={currentProject.server}
                title="Server side"
              >
                {currentProject.server}
              </a>
            </h3>
          ) : (
            ""
          )}
        </div>
        <div className="mt-5">
          <SectionTitle title={"Features"} />
          <ul className="list-disc ml-5 mt-5">
            {currentProject?.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="mt-5">
          <SectionTitle title="Screenshots" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
            {currentProject?.screenshots?.map((item, index) => (
              <figure key={index}>
                <LazyLoad height={"auto"}>
                  <img src={item} />
                </LazyLoad>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
