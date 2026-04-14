"use client";

import { FormEvent, useRef, useState } from "react";
import { Mail } from "lucide-react";
import { LiquidButton } from "../animate-ui/components/buttons/liquid";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";

type SocialAccount = {
  name: string;
  handle: string;
  href: string;
  icon: "github" | "linkedin" | "email" | "instagram";
};

const SOCIAL_ACCOUNTS: SocialAccount[] = [
  {
    name: "GitHub",
    handle: "@G17aurav",
    href: "https://github.com/G17aurav",
    icon: "github",
  },
  {
    name: "LinkedIn",
    handle: "Gaurav Singh",
    href: "https://www.linkedin.com/in/gaurav-singh-1b2a3d4c",
    icon: "linkedin",
  },
  {
    name: "Email",
    handle: "gauravsinghmjm25@gmail.com",
    href: "mailto:gauravsinghmjm25@gmail.com",
    icon: "email",
  },
  {
    name: "Instagram",
    handle: "@gaurav_.0.9",
    href: "https://www.instagram.com/gaurav_.0.9/",
    icon: "instagram",
  },
];

const WEB3FORMS_ACCESS_KEY = "5627848d-017a-4c2f-8ba8-66fdbd6a5ed6";

function SocialIcon({ type }: { type: SocialAccount["icon"] }) {
  if (type === "github") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.08 1.84 2.82 1.31 3.5 1 .11-.78.42-1.31.76-1.62-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.64.24 2.86.12 3.16.76.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM3 9h4v12H3zM10 9h3.83v1.64h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V21h-4v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95V21h-4z" />
      </svg>
    );
  }

  if (type === "email") {
    return <Mail className="h-5 w-5" aria-hidden="true" />;
  }

  if (type === "instagram") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1ZM12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5Zm0 1.8A3.2 3.2 0 1 0 15.2 12 3.2 3.2 0 0 0 12 8.8Z" />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15 15 0 0 1 0 20" />
      <path d="M12 2a15 15 0 0 0 0 20" />
    </svg>
  );
}

export const Contact = () => {
  const contactRef = useRef<HTMLElement | null>(null);
  const [submitState, setSubmitState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  useGsapReveal(contactRef, {
    selector: "[data-animate-contact]",
    y: 30,
    duration: 0.75,
    stagger: 0.11,
    start: "top 84%",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const username = formData.get("username")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const message = formData.get("message")?.toString().trim() ?? "";

    if (!username || !email || !message) {
      setSubmitState("error");
      setSubmitMessage("Please fill all fields before sending.");
      return;
    }

    setSubmitState("submitting");
    setSubmitMessage("");

    try {
      const payload = new FormData();
      payload.append("access_key", WEB3FORMS_ACCESS_KEY);
      payload.append("name", username);
      payload.append("email", email);
      payload.append("message", message);
      payload.append("subject", `Portfolio Contact - ${username}`);
      payload.append("from_name", "Portfolio Contact Form");
      payload.append("botcheck", "");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const result: { success?: boolean; message?: string } =
        await response.json();

      if (result.success) {
        setSubmitState("success");
        setSubmitMessage("Message sent successfully.");
        form.reset();
        return;
      }

      setSubmitState("error");
      setSubmitMessage(result.message ?? "Unable to send message.");
    } catch {
      setSubmitState("error");
      setSubmitMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      ref={contactRef}
      id="contact"
      className="relative w-full overflow-x-hidden bg-black px-4 pb-24 pt-28 text-white md:px-8"
    >
      <div className="mx-auto w-[90vw] max-w-7xl">
        <h2
          data-animate-contact
          className="mb-16 text-center text-4xl font-bold md:text-5xl lg:text-6xl"
        >
          Contact <span className="text-yellow-400">ME</span>
        </h2>

        <div className="grid gap-10 lg:grid-cols-2">
          <div
            data-animate-contact
            className="rounded-3xl border border-yellow-400 bg-zinc-950/60 p-6 md:p-8"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-yellow-400/90">
              Connect With Me
            </p>
            <h3 className="mt-3 text-2xl font-bold md:text-3xl">
              Social Accounts
            </h3>

            <div className="mt-8 flex -space-x-4">
              {SOCIAL_ACCOUNTS.map((account) => (
                <a
                  key={`${account.name}-avatar`}
                  href={account.href}
                  target={account.href.startsWith("http") ? "_blank" : undefined}
                  rel={account.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={account.name}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-yellow-400/60 bg-black text-yellow-300 shadow-[0_0_18px_rgba(250,204,21,0.22)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <SocialIcon type={account.icon} />
                </a>
              ))}
            </div>

            <div className="mt-8 grid gap-3">
              {SOCIAL_ACCOUNTS.map((account) => (
                <a
                  key={account.name}
                  href={account.href}
                  target={account.href.startsWith("http") ? "_blank" : undefined}
                  rel={account.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-black/50 px-4 py-3 transition-colors hover:border-yellow-400/50"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-lg border border-white/20 bg-zinc-900 p-2 text-yellow-300">
                      <SocialIcon type={account.icon} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{account.name}</p>
                      <p className="text-xs text-white/60">{account.handle}</p>
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-wide text-yellow-300">
                    Open
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div
            data-animate-contact
            className="rounded-3xl border border-yellow-400 bg-zinc-950/60 p-6 md:p-8"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-yellow-400/90">
              Send Message
            </p>
            <h3 className="mt-3 text-2xl font-bold md:text-3xl">Let&apos;s Talk</h3>

            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <input type="checkbox" name="botcheck" className="hidden" />
              <div>
                <label
                  htmlFor="contact-username"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Username
                </label>
                <input
                  id="contact-username"
                  name="username"
                  type="text"
                  required
                  placeholder="Enter your username"
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 focus:border-yellow-400/60 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 focus:border-yellow-400/60 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message"
                  className="w-full resize-none rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 focus:border-yellow-400/60 focus:outline-none"
                />
              </div>

              <LiquidButton
                type="submit"
                disabled={submitState === "submitting"}
                className="w-full cursor-pointer [--liquid-button-color:#facc15] [--liquid-button-hover-text-color:#000000] [--liquid-button-background-color:rgba(250,204,21,0.12)] [--liquid-button-border-color:rgba(250,204,21,0.55)] text-yellow-300"
              >
                {submitState === "submitting" ? "Sending..." : "Send Message"}
              </LiquidButton>

              {submitMessage && (
                <p
                  className={`text-sm ${
                    submitState === "success"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
