"use client";

import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
  type SelectHTMLAttributes,
} from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type FormStatus = "idle" | "loading" | "success" | "partial" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const statusRef = useRef<HTMLParagraphElement>(null);
  const isLoading = status === "loading";

  useEffect(() => {
    if (status === "success" || status === "partial" || status === "error") {
      statusRef.current?.focus();
    }
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("loading");
    setErrorMessage("");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });
      const result = (await response.json()) as {
        error?: string;
        message?: string;
        partial?: boolean;
      };

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      if (result.partial) {
        setStatus("partial");
        setStatusMessage(
          result.message ||
            "Your review request was saved. Do not submit again; we will follow up from the saved request.",
        );
        return;
      }

      setStatus("success");
      setStatusMessage(
        result.message || "Success. Your review request has been saved.",
      );
      form.reset();
    } catch (error: unknown) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-lg border border-border bg-card p-5 shadow-sm sm:p-6"
    >
      <div>
        <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-accent">
          Step 1
        </p>
        <h2 className="mt-2 font-serif text-2xl font-bold">
          Send the business and workflow problem.
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Optional qualifiers help, but the first submission only needs enough
          context to judge fit.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" required={true}>
          <Input id="name" name="name" autoComplete="name" required disabled={isLoading} />
        </Field>
        <Field id="business-name" label="Business name" required={true}>
          <Input id="business-name" name="business-name" autoComplete="organization" required disabled={isLoading} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label="Email" required={true}>
          <Input id="email" name="email" type="email" autoComplete="email" required disabled={isLoading} />
        </Field>
        <Field id="phone" label="Phone">
          <Input id="phone" name="phone" type="tel" autoComplete="tel" disabled={isLoading} />
        </Field>
      </div>

      <Field id="website" label="Website" required={true}>
        <Input id="website" name="website" type="url" placeholder="https://" autoComplete="url" required disabled={isLoading} />
      </Field>

      <Field id="main-problem" label="Main problem" required={true}>
        <Select id="main-problem" name="main-problem" required disabled={isLoading}>
          <option value="">Select one</option>
          <option value="missed-calls">Missed calls</option>
          <option value="lead-capture">Lead capture</option>
          <option value="scheduling">Scheduling support</option>
          <option value="internal-docs">Internal documents</option>
          <option value="follow-up">Follow-up</option>
          <option value="data-handling">Customer data handling</option>
        </Select>
      </Field>

      <Field id="notes" label="Notes" required={true}>
        <Textarea
          id="notes"
          name="notes"
          placeholder="Share what is happening with calls, leads, scheduling, documents, follow-up, or customer data."
          required
          disabled={isLoading}
        />
      </Field>

      <details className="rounded-md border border-border bg-background/70 p-4">
        <summary className="cursor-pointer text-sm font-bold text-primary">
          Optional operation details
        </summary>
        <div className="mt-5 grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="industry" label="Industry">
              <Input id="industry" name="industry" placeholder="Countertops, home services, med spa..." disabled={isLoading} />
            </Field>
            <Field id="locations" label="Number of locations">
              <Select id="locations" name="locations" disabled={isLoading}>
                <option value="">Select one</option>
                <option value="1">1 location</option>
                <option value="2-3">2-3 locations</option>
                <option value="4-10">4-10 locations</option>
                <option value="10-plus">10+ locations</option>
              </Select>
            </Field>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="call-volume" label="Approximate call volume">
              <Select id="call-volume" name="call-volume" disabled={isLoading}>
                <option value="">Select one</option>
                <option value="under-25-week">Under 25 calls/week</option>
                <option value="25-100-week">25-100 calls/week</option>
                <option value="100-300-week">100-300 calls/week</option>
                <option value="300-plus-week">300+ calls/week</option>
                <option value="not-sure">Not sure</option>
              </Select>
            </Field>
            <Field id="assistant-scope" label="Assistant scope">
              <Select id="assistant-scope" name="assistant-scope" disabled={isLoading}>
                <option value="">Select one</option>
                <option value="phone-assistant">Phone assistant</option>
                <option value="website-assistant">Website assistant</option>
                <option value="internal-assistant">Internal assistant</option>
                <option value="phone-website">Phone + website assistant</option>
                <option value="all-three">Phone + website + internal assistant</option>
                <option value="not-sure">Not sure yet</option>
              </Select>
            </Field>
          </div>
        </div>
      </details>

      <div className="grid gap-3">
        <Button type="submit" size="lg" disabled={isLoading}>
          {isLoading ? "Saving request..." : "Request an AI Operations Review"}
        </Button>
        <FormStatusMessage
          ref={statusRef}
          status={status}
          statusMessage={statusMessage}
          errorMessage={errorMessage}
        />
        <p className="text-xs leading-5 text-muted-foreground">
          No spam. You will get a practical next-step reply.
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required = false,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>
        {label}
        {required ? (
          <span className="ml-1 text-accent" aria-hidden="true">
            *
          </span>
        ) : null}
        {required ? <span className="sr-only"> Required</span> : null}
      </Label>
      {children}
    </div>
  );
}

function Select({ children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className="h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-sm"
    >
      {children}
    </select>
  );
}

const FormStatusMessage = forwardRef<
  HTMLParagraphElement,
  {
    status: FormStatus;
    statusMessage: string;
    errorMessage: string;
  }
>(function FormStatusMessage({ status, statusMessage, errorMessage }, ref) {
  if (status === "idle" || status === "loading") {
    return null;
  }

  const isError = status === "error";
  const isPartial = status === "partial";

  return (
    <p
      ref={ref}
      tabIndex={-1}
      role={isError ? "alert" : "status"}
      aria-live={isError ? "assertive" : "polite"}
      className={
        isError
          ? "rounded-md border border-red-600/30 bg-red-600/10 px-3 py-2 text-sm font-medium text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          : isPartial
            ? "rounded-md border border-amber/40 bg-amber/10 px-3 py-2 text-sm font-medium text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            : "rounded-md border border-green-600/30 bg-green-600/10 px-3 py-2 text-sm font-medium text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      }
    >
      {isError ? `Error: ${errorMessage}` : statusMessage}
    </p>
  );
});
