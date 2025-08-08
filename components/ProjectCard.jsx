export default function ProjectCard({ project }) {
  return (
    <article className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="font-semibold text-lg">{project.title}</h3>
      <p className="text-sm text-slate-600 mt-2">{project.desc}</p>
      <div className="mt-3">
        <a href={project.repo} target="_blank" rel="noreferrer" className="text-sm text-sky-600 hover:underline">GitHub</a>
      </div>
    </article>
  );
}
