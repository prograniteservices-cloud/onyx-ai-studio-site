import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900">
          AI-Powered Solutions for Modern Businesses
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mt-6">
          Integration. Automation. Full-Stack Development. We build systems that work.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link href="/projects" className={cn(buttonVariants({ size: "lg" }), "rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5")}>
            View Our Work
          </Link>
          <Link href="/contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-lg")}>
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">What We Do</h2>
            <p className="text-lg text-slate-600 mt-4">Production-ready systems for businesses that need AI to work.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="rounded-2xl shadow-sm border-slate-100 bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">AI Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600">
                  Custom AI chatbots, semantic search engines, and intelligent automation for your business. We connect LLMs to your existing systems.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-sm border-slate-100 bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600">
                  Modern, fast, SEO-optimized websites and web applications. Built with Next.js, React, and deployed for scale.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-sm border-slate-100 bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">Workflow Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600">
                  Multi-agent AI systems that automate repetitive business processes. Design, build, and deploy.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
