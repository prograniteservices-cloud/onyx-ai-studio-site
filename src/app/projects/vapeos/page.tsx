import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function VapeOS() {
  return (
    <main className="py-24 px-6 max-w-3xl mx-auto">
      <div className="mb-16 border-b border-slate-100 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">VapeOS</h1>
        <p className="text-xl text-indigo-600 mt-4 font-medium">AI-Powered Inventory Management System</p>
      </div>

      <div className="space-y-12 text-lg text-slate-600 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">The Problem</h2>
          <p>
            Retail stores with thousands of SKUs struggle with inventory discovery. Traditional keyword search fails for products with inconsistent naming, abbreviations, or industry jargon. Staff spend too much time hunting through catalogs instead of serving customers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">The Solution</h2>
          <p>
            VapeOS uses semantic verbal search powered by AI. The AI controls the dashboard — users speak or type naturally and the system surfaces relevant products based on meaning, rather than exact keyword matches. The architecture uses a Next.js frontend, a Supabase database with vector embeddings, and the Gemini API for semantic understanding.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">The Result</h2>
          <p>
            The system currently indexes over 1,700 real products. Semantic search works across the entire inventory, significantly reducing search time and providing an intuitive, AI-controlled dashboard interface for staff.
          </p>
        </section>

        <div className="pt-8">
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "rounded-lg shadow-sm")}>
            Request a Demo
          </Link>
        </div>
      </div>
    </main>
  );
}
