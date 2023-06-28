import { useState } from "react";
import { useEffect } from "react";

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then(res => res.json())
      .then(data => setProjects(data.sort((a, b) => b.id - a.id)));
  }, []);
  return projects;
};

export default useProjects;
