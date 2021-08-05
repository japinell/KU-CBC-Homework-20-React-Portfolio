import React from "react";
import ProjectHeading from "./ProjectHeading";
import ProjectCard from "./ProjectCard";
import projects from "../data/ProjectData";

function Projects() {
  return (
    <section>
      <ProjectHeading />
      <ProjectCard projects={projects} />
    </section>
  );
}

export default Projects;
