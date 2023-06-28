import { useParams } from "react-router-dom";
import useProjects from "../../Hooks/useProjects";

const SingleProject = () => {
  const param = useParams();
  const projects = useProjects();
  const currentProject =
    projects.find(project => project.name === param.projectName) || {};
  console.log(currentProject);
  return (
    <div>
      <h2>{currentProject.name}</h2>
    </div>
  );
};

export default SingleProject;
