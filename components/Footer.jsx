export default function Footer(){
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-5xl mx-auto px-4 py-6 flex items-center justify-between text-sm text-slate-500">
        <div>© {new Date().getFullYear()} Ankit Kumar</div>
        <div className="flex gap-3">
          <a href="https://linkedin.com/in/ankit-kumar-27-july" target="_blank" rel="noreferrer" className="hover:text-sky-600">LinkedIn</a>
          <a href="https://github.com/ankit-kumar-it" target="_blank" rel="noreferrer" className="hover:text-sky-600">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
