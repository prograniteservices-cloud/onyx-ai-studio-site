import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

export default function Projects() {
  return (
    <main className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Our Projects</h1>
        <p className="text-lg text-slate-600 mt-4">Production-ready systems built for real businesses.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="rounded-2xl shadow-sm border-slate-100 bg-white flex flex-col hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900">VapeOS</CardTitle>
            <CardDescription className="text-sm font-medium text-indigo-600 mt-1">Next.js · Supabase · Gemini API</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-base text-slate-600">
              AI-powered inventory management with semantic verbal search across 1,700+ products.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/projects/vapeos" className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
              View Case Study &rarr;
            </Link>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
