// src/pages/ProjectDetail.tsx
import { useParams } from "react-router-dom";
import { projects } from "../data/data";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="p-6 text-red-500">Project not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="w-full object-cover rounded-lg mb-6"
      />
      <div className="space-y-4">
        <p className="text-lg">{project.description}</p>
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p>{project.overview}</p>
        <h2 className="text-2xl font-semibold">Problem</h2>
        <p>{project.problem}</p>
        <h2 className="text-2xl font-semibold">Research</h2>
        <p>{project.research}</p>
        <h2 className="text-2xl font-semibold">Process</h2>
        <p>{project.process}</p>
        <h2 className="text-2xl font-semibold">Outcome</h2>
        <p>{project.outcome}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.skills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-6">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
          >
            GitHub
          </a>
        </div>
        <div className="mt-4 text-sm text-gray-400">
          <p>
            <strong>Type:</strong> {project.type}
          </p>
          <p>
            <strong>Timeline:</strong> {project.timeline}
          </p>
          <p>
            <strong>Duration:</strong> {project.duration}
          </p>
          <p>
            <strong>Role:</strong> {project.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
