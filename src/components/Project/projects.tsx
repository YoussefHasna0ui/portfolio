import { projects } from "@/lib/constants";
import ProjectCard from "../projectCard";

const Project = () => {
  return (
    <div id="projects" className="w-full flex flex-col mx-2 mt-20">
      <p className="text-2xl md:text-5xl font-bold">Projekte</p>
      <div className="grid md:grid-cols-2 gap-8 mt-10 grid-cols-1">
        {projects?.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
    </div>
  );
};

export default Project;
