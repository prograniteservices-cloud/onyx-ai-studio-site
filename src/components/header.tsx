import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-lg text-slate-900 tracking-tight">
          ONYX AI STUDIO
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-slate-600">
          <Link href="/projects" className="hover:text-indigo-600 transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-indigo-600 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
