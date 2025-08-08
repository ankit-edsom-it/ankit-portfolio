export default function Button({ children, variant='solid', as='button', ...props }) {
  const base = 'inline-flex items-center gap-2 px-4 py-2 rounded transition';
  const solid = 'bg-sky-600 text-white hover:bg-sky-700';
  const ghost = 'bg-transparent border border-sky-600 text-sky-600 hover:bg-sky-50';
  const cls = [base, variant === 'solid' ? solid : ghost].join(' ');
  const Component = as;
  return <Component className={cls} {...props}>{children}</Component>
}
