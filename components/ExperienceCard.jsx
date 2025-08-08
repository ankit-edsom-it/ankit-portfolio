export default function ExperienceCard({ exp }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition">
      <div className="flex items-baseline justify-between flex-wrap gap-2">
        <div>
          <div className="font-semibold">{exp.role} — {exp.company}</div>
          <div className="text-sm text-slate-500">{exp.location}</div>
        </div>
        <div className="text-sm text-slate-600">{exp.duration}</div>
      </div>
      <ul className="list-disc pl-5 mt-2 text-sm text-slate-700 space-y-1">
        {exp.bullets.map((b,i)=> <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}
