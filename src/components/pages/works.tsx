import projects from "../../data/projects.json";
import Project from "../project";

export default function Works() {
  return (
    <div id="works" className="min-h-[100vh] mx-auto mt-10">
      <h1 className="text-center text-3xl font-extrabold">Works</h1>
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 mt-10">
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
