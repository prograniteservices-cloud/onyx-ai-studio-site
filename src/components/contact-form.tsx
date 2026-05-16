"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setStatus("success");
      form.reset();
    } catch (error: unknown) {
      console.error(error);
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong",
      );
    }
  }

  const isLoading = status === "loading";

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-lg border border-border bg-card p-5 shadow-sm sm:p-6"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            disabled={isLoading}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="business-name">Business name</Label>
          <Input
            id="business-name"
            name="business-name"
            autoComplete="organization"
            required
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled={isLoading}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          name="website"
          type="url"
          placeholder="https://"
          autoComplete="url"
          disabled={isLoading}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="industry">Industry</Label>
          <Input
            id="industry"
            name="industry"
            placeholder="Home services, med spa, legal, retail..."
            required
            disabled={isLoading}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="locations">Number of locations</Label>
          <select
            id="locations"
            name="locations"
            required
            disabled={isLoading}
            className="h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-sm"
          >
            <option value="">Select one</option>
            <option value="1">1 location</option>
            <option value="2-3">2-3 locations</option>
            <option value="4-10">4-10 locations</option>
            <option value="10-plus">10+ locations</option>
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="call-volume">Approximate call volume</Label>
          <select
            id="call-volume"
            name="call-volume"
            required
            disabled={isLoading}
            className="h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-sm"
          >
            <option value="">Select one</option>
            <option value="under-25-week">Under 25 calls/week</option>
            <option value="25-100-week">25-100 calls/week</option>
            <option value="100-300-week">100-300 calls/week</option>
            <option value="300-plus-week">300+ calls/week</option>
            <option value="not-sure">Not sure</option>
          </select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="main-problem">Main problem</Label>
          <select
            id="main-problem"
            name="main-problem"
            required
            disabled={isLoading}
            className="h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-sm"
          >
            <option value="">Select one</option>
            <option value="missed-calls">Missed calls</option>
            <option value="lead-capture">Lead capture</option>
            <option value="scheduling">Scheduling support</option>
            <option value="internal-docs">Internal documents</option>
            <option value="follow-up">Follow-up</option>
            <option value="data-handling">Customer data handling</option>
          </select>
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="assistant-scope">Assistant scope</Label>
        <select
          id="assistant-scope"
          name="assistant-scope"
          required
          disabled={isLoading}
          className="h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-sm"
        >
          <option value="">Select one</option>
          <option value="phone-assistant">Phone assistant</option>
          <option value="website-assistant">Website assistant</option>
          <option value="internal-assistant">Internal assistant</option>
          <option value="phone-website">Phone + website assistant</option>
          <option value="all-three">Phone + website + internal assistant</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="notes">Notes</Label>
        <Textarea
          id="notes"
          name="notes"
          placeholder="Share what is happening with calls, leads, scheduling, documents, follow-up, or customer data."
          required
          disabled={isLoading}
        />
      </div>

      <div className="grid gap-3">
        <Button type="submit" size="lg" disabled={isLoading}>
          {isLoading ? "Sending..." : "Request an AI Operations Review"}
        </Button>

        {status === "success" && (
          <p className="text-sm font-medium text-green-600">
            Success. Your review request has been sent.
          </p>
        )}

        {status === "error" && (
          <p className="text-sm font-medium text-red-600">
            Error: {errorMessage}
          </p>
        )}

        <p className="text-xs leading-5 text-muted-foreground">
          This is a consultative review request, not a chatbot checkout.
        </p>
      </div>
    </form>
  );
}
