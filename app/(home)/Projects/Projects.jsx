import axios from "axios";
import ProjectCard from "../../../ui/ProjectCard/ProjectCard";
import projects from "./projects.module.css";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projectList, setProjectList] = useState({
    projects: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    (async function () {
      try {
        const resp = await axios.get("/api/projects");

        if (resp.status === 200) {
          setProjectList((prev) => ({
            ...prev,
            projects: resp.data,
          }));
        }
      } catch (error) {
        setProjectList((prev) => ({
          ...prev,
          error: error.message,
        }));
      } finally {
        setProjectList((prev) => ({
          ...prev,
          isLoading: false,
        }));
      }
    })();
  }, []);

  if (projectList.isLoading) return <div>Loading...</div>;
  if (projectList.error) return <div>{projectList.error}</div>;
  return (
    <div className={projects.container} id="projects">
      <h2 className={projects.title}>Projects </h2>
      <div className={projects.cards}>
        {projectList.projects.length === 0 ? (
          <div className={projects.no__project}>There is no project</div>
        ) : (
          projectList.projects.map((project) => (
            <div className={projects.card} key={project._id}>
              <ProjectCard
                name={project.name}
                link={project.link}
                image={project.image}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
