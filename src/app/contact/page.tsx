import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <main className="py-24 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Get in Touch</h1>
        <p className="text-lg text-slate-600 mt-4">Tell us about your project or request a demo.</p>
      </div>

      <Card className="rounded-2xl shadow-sm border-slate-100 bg-white p-2">
        <CardHeader>
          <CardTitle className="text-xl text-slate-900">Send a Message</CardTitle>
          <CardDescription className="text-base text-slate-600">
            We usually respond within 24 hours.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-900">Name</label>
              <Input id="name" placeholder="John Doe" required className="rounded-lg" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-900">Email</label>
              <Input id="email" type="email" placeholder="john@example.com" required className="rounded-lg" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-900">Message</label>
              <Textarea id="message" placeholder="How can we help you?" rows={5} required className="rounded-lg" />
            </div>

            <Button type="submit" size="lg" className="w-full rounded-lg shadow-sm">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
