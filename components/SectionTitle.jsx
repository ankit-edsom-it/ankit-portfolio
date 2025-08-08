export default function SectionTitle({ children, id }) {
  return (
    <h2 id={id} className="text-2xl font-semibold my-6 border-l-4 border-sky-500 pl-3">
      {children}
    </h2>
  );
}
