import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <form
      action="mailto:hello@onyxaistudio.com"
      method="post"
      encType="text/plain"
      className="grid gap-5 rounded-lg border border-border bg-card p-5 shadow-sm sm:p-6"
    >
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" autoComplete="name" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="project-type">Project type</Label>
        <select
          id="project-type"
          name="project-type"
          required
          className="h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-sm"
        >
          <option value="">Select one</option>
          <option value="ai-integration">AI integration</option>
          <option value="automation-workflows">Automation workflows</option>
          <option value="web-development">Web development</option>
          <option value="seo-content-systems">SEO content systems</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="budget">Budget range</Label>
        <select
          id="budget"
          name="budget"
          className="h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-sm"
        >
          <option value="">Prefer to discuss</option>
          <option value="under-5k">Under $5k</option>
          <option value="5k-15k">$5k to $15k</option>
          <option value="15k-plus">$15k+</option>
        </select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">What needs to work better?</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Share the workflow, data, customer journey, or site problem."
        />
      </div>
      <div className="grid gap-3">
        <Button type="submit" size="lg">
          Request my fit review
        </Button>
        <p className="text-xs leading-5 text-muted-foreground">
          No spam. You will get a practical next-step reply. Replace this
          mailto form with a server action once the final inbox is confirmed.
        </p>
      </div>
    </form>
  );
}
