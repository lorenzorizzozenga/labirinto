export default function PageHeader({ title }: { title: string }) {
  return (
    <header className="h-14 flex items-center px-8 border-b border-zinc-200">
      <h1 className="text-xs font-bold tracking-wider">{title}</h1>
    </header>
  );
}
