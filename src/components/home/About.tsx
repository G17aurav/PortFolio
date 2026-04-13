"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { CodeTabs } from "../animate-ui/components/animate/code-tabs";

const REACT_TAILWIND_CODE = `import { useState } from "react";

export default function App() {

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
      This is React JS
    </div>
  );
}`;

const PRISMA_MYSQL_CODE = `generator client {
  provider = "prisma-client-js"
}

datasource db {
  url      = env("DATABASE_URL")
}

model Project {
  id        Int      @id @default(autoincrement())
  name      String
}`;

const TECH_STACK_ITEMS = [
  { image: "reactjs.png", label: "React" },
  { image: "nextjs.png", label: "Next.js" },
  { image: "tailwind.png", label: "Tailwind" },
  { image: "gsap.png", label: "GSAP" },
  { image: "express.png", label: "Express" },
  { image: "NodeJS.png", label: "Node.js" },
  { image: "mongodb.png", label: "MongoDB" },
  { image: "prisma.png", label: "Prisma" },
  { image: "redis.png", label: "Redis" },
  { image: "git.png", label: "Git" },
  { image: "cypress.png", label: "Cypress" },
  { image: "vercel.png", label: "Vercel" },
];

const TECH_CODE_MAP: Record<string, { fileName: string; code: string }> = {
  "cypress.png": {
    fileName: "cypress/e2e/home.cy.ts",
    code: `describe("home page", () => {
  it("shows hero title", () => {
    cy.visit("/");
    cy.contains("Gaurav Singh").should("be.visible");
  });
});`,
  },
  "express.png": {
    fileName: "server.js",
    code: `const express = require("express");
const app = express();

app.get("/", (_req, res) => {
  res.send("Express server is running");
});

app.listen(3001, () => {
  console.log("Server listening on http://localhost:3001");
});`,
  },
  "git.png": {
    fileName: "git-commands.sh",
    code: `git status
git checkout -b feature/about-preview
git add src/components/home/About.tsx
git commit -m "Add hover code preview"
git fetch origin
git rebase origin/main
git push -u origin feature/about-preview`,
  },
  "gsap.png": {
    fileName: "src/animations/hero.ts",
    code: `import { gsap } from "gsap";

export function animateHero() {
  gsap.from(".hero-title", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  });
}`,
  },
  "mongodb.png": {
    fileName: "models/User.ts",
    code: `const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {type: String, required: true, unique: true},},
});

const User = mongoose.model("User", UserSchema);

module.exports = User;`,
  },
  "nextjs.png": {
    fileName: "app/page.tsx",
    code: `'use client';

import { useState } from "react";

export default function Page() {

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      This is Next.js
    </main>
  );
}`,
  },
  "NodeJS.png": {
    fileName: "index.js",
    code: `const http = require("http");

const server = http.createServer((_req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify({ status: "ok" }));
});

server.listen(3000, () => {
  console.log("Node server running on http://localhost:3000");
});`,
  },
  "prisma.png": {
    fileName: "prisma/schema.prisma",
    code: PRISMA_MYSQL_CODE,
  },
  "mysql.png": {
    fileName: "prisma/schema.prisma",
    code: PRISMA_MYSQL_CODE,
  },
  "reactjs.png": {
    fileName: "src/App.tsx",
    code: REACT_TAILWIND_CODE,
  },
  "redis.png": {
    fileName: "src/server/redis.ts",
    code: `const express = require("express");
const { createClient } = require("redis");

const redis = createClient({ url: process.env.REDIS_URL });
redis.on("error", (error) => console.error("Redis error:", error));

const app = express();

app.get("/cache-health", async (_req, res) => {
  await redis.connect();
  const value = await redis.get("health");
  res.json({ redis: value });
});`,
  },
  "tailwind.png": {
    fileName: "src/App.tsx",
    code: REACT_TAILWIND_CODE,
  },
  "vercel.png": {
    fileName: "vercel.json",
    code: `{
  "version": 2,
  "functions": {
    "api/**/*.js": {
      "maxDuration": 10
    }
  }
}`,
  },
};

export const About = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof window.setTimeout> | null>(
    null,
  );

  const clearHoverTimeout = () => {
    if (hoverTimeoutRef.current !== null) {
      window.clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const showPreviewWithDelay = (imageName: string) => {
    clearHoverTimeout();
    hoverTimeoutRef.current = window.setTimeout(() => {
      setActiveImage(imageName);
      hoverTimeoutRef.current = null;
    }, 700);
  };

  const resetPreview = () => {
    clearHoverTimeout();
    setActiveImage(null);
  };

  useEffect(() => {
    return () => {
      clearHoverTimeout();
    };
  }, []);

  const activeCodeTab = useMemo(() => {
    if (!activeImage) return null;
    return TECH_CODE_MAP[activeImage] ?? null;
  }, [activeImage]);

  return (
    <div className="relative h-auto w-full overflow-x-hidden bg-black py-8 pt-16 text-white">
      <div className="mx-auto grid h-auto w-[90vw] max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center z-900">
          <p className="mb-5 text-4xl font-black tracking-tight leading-[0.95] md:text-6xl lg:text-7xl">
            <span className="text-yellow-400">DEVELOPER</span> Overview
          </p>
          <div className="mt-12 flex flex-col gap-4 text-md text-white/70 md:text-lg">
            <p>
              I am a Full Stack Developer with 1+ years of experience building
              scalable, user-focused web applications. I have contributed to
              production-grade platforms deployed in real client environments,
              including healthcare solutions for doctors as well as ERP systems
              designed to streamline business operations and improve workflow
              efficiency.
            </p>
            <p>
              Beyond personal projects, I&apos;ve contributed to several live
              production applications built for employer clients, which has
              given me valuable exposure to building reliable software in
              professional environments.
            </p>
            <p>
              My technical expertise includes React, Next.js, Node.js,
              Express.js, MongoDB, MySQL, Prisma, JavaScript, TypeScript, and
              Tailwind CSS, complemented by tools and libraries such as GSAP,
              Vitest, Cypress, and Postman.
            </p>
          </div>
        </div>
        <div className="flex h-full items-center justify-center">
          <div className="w-full max-w-3xl" onMouseLeave={resetPreview}>
            {activeCodeTab ? (
              <CodeTabs
                key={activeImage}
                codes={{ [activeCodeTab.fileName]: activeCodeTab.code }}
                defaultValue={activeCodeTab.fileName}
                className="w-full border-white/10 bg-zinc-950/90"
              />
            ) : (
              <div className="grid w-full grid-cols-3 gap-4 sm:grid-cols-4">
                {TECH_STACK_ITEMS.map((item) => (
                  <button
                    key={item.image}
                    type="button"
                    onMouseEnter={() => showPreviewWithDelay(item.image)}
                    onFocus={() => showPreviewWithDelay(item.image)}
                    onMouseLeave={clearHoverTimeout}
                    onBlur={clearHoverTimeout}
                    className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-zinc-950/80 p-3"
                    aria-label={`Preview ${item.label} code`}
                  >
                    <Image
                      src={`/techStacks/${item.image}`}
                      alt={`${item.label} logo`}
                      fill
                      sizes="(max-width: 640px) 28vw, (max-width: 1024px) 20vw, 12vw"
                      className="rounded-2xl object-contain p-3 transition-transform duration-300 group-hover:scale-[1.03] group-focus-visible:scale-[1.03] [box-shadow:inset_0_0_0_2px_rgba(250,204,21,0.5),0_0_24px_rgba(250,204,21,0.2)]"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
