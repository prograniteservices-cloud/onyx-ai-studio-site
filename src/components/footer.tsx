import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-12 text-center text-slate-500">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm">© 2026 Onyx AI Studio. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="https://github.com/onyx-ai-studio" className="hover:text-indigo-600 transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/company/onyx-ai-studio" className="hover:text-indigo-600 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
