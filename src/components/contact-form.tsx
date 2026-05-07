"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setStatus("success");
      (event.target as HTMLFormElement).reset();
    } catch (error: any) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error.message);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-lg border border-border bg-card p-5 shadow-sm sm:p-6"
    >
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" autoComplete="name" required disabled={status === "loading"} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          disabled={status === "loading"}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="project-type">Project type</Label>
        <select
          id="project-type"
          name="project-type"
          required
          disabled={status === "loading"}
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
          disabled={status === "loading"}
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
          disabled={status === "loading"}
        />
      </div>
      <div className="grid gap-3">
        <Button type="submit" size="lg" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Request my fit review"}
        </Button>
        
        {status === "success" && (
          <p className="text-sm font-medium text-green-600">
            Success! Your request has been sent. We'll be in touch soon.
          </p>
        )}
        
        {status === "error" && (
          <p className="text-sm font-medium text-red-600">
            Error: {errorMessage}
          </p>
        )}

        <p className="text-xs leading-5 text-muted-foreground">
          No spam. You will get a practical next-step reply.
        </p>
      </div>
    </form>
  );
}
