"use client";

import Image from "next/image";

type ProjectCard = {
  name: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  projectType: "Personal" | "Company";
  contribution: "Completed end-to-end by me" | "Implemented key modules";
  techStack: string[];
  about: string;
};

const PROJECTS: ProjectCard[] = [
  {
    name: "Tavi Vision",
    image: "/projects/tavivision.png",
    liveUrl: "https://tavivision.nuvobuddy.com/",
    projectType: "Company",
    contribution: "Completed end-to-end by me",
    techStack: ["NextJS", "Tailwind", "Express", "Redis", "GSAP"],
    about:
      "I built the full report-to-result pipeline: report upload handling, AI inference integration, extraction and validation of report values, calculation logic implementation, and structured response rendering for users. I focused on correctness, reliability, and maintainable service boundaries.",
  },
  {
    name: "Word Guess",
    image: "/projects/wordGuess.png",
    liveUrl: "https://word-guess-1.onrender.com/",
    githubUrl: "https://github.com/G17aurav/Word-Guess",
    projectType: "Personal",
    contribution: "Completed end-to-end by me",
    techStack: ["React", "Tailwind", "Express", "Socket.io"],
    about:
      "I implemented a Skribbl-style realtime game using Socket.IO, handling drawing events, guess validation, round state management, scoring logic, and synchronized multiplayer updates. I designed the event flow to keep gameplay responsive and consistent across all connected users.",
  },
  {
    name: "Secure Test",
    image: "/projects/secureTest.png",
    githubUrl: "https://github.com/G17aurav/Secure-Test",
    projectType: "Personal",
    contribution: "Completed end-to-end by me",
    techStack: ["React", "Tailwind", "Express", "Prisma", "MySQL"],
    about:
      "I built a proctored test platform (without AI) by enforcing exam controls such as fullscreen lock, tab-switch detection, and copy-paste restrictions. I also used the Navigator APIs to record candidate video, compressed recordings, and uploaded them to S3 for secure review workflows.",
  },
  {
    name: "Radio IQ",
    image: "/projects/radioiq.png",
    liveUrl: "https://www.radioiq.ai/",
    projectType: "Company",
    contribution: "Implemented key modules",
    techStack: ["React", "Tailwind", "Express", "MongoDB", "Redis"],
    about:
      "I primarily implemented the offline version workflows in the admin panel and designed the token purchase pipeline end-to-end. This included integrating purchase flow logic, backend coordination, and admin-side handling to keep transactions reliable and operationally clear.",
  },
  {
    name: "Nμrna",
    image: "/projects/nurna.png",
    liveUrl: "https://www.nurna.ai/",
    projectType: "Company",
    contribution: "Implemented key modules",
    techStack: ["React", "Tailwind", "Express", "PostgreSQL"],
    about:
      "My primary contribution was database optimization for high-volume operations, with critical workflows querying 10+ lakh rows. I optimized query patterns and data-access paths to reduce latency, stabilize heavy DB calls, and keep large-scale reads reliable in production.",
  },
  {
    name: "Dicom Pixel",
    image: "/projects/dicompixel.png",
    liveUrl: "https://www.dicompixel.ai/",
    projectType: "Company",
    contribution: "Implemented key modules",
    techStack: ["React", "Tailwind", "Django", "MySQL"],
    about:
      "The base product was already built; I contributed in V2 and primarily implemented frontend modules. I focused on integrating V2 UI flows with existing APIs, improving component consistency, and delivering stable user-facing behavior without disrupting the existing platform.",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full overflow-x-hidden bg-black px-4 pb-24 pt-28 text-white md:px-8"
    >
      <div className="mx-auto w-[90vw] max-w-7xl">
        <h2 className="mb-32 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          From <span className="text-yellow-400">CONCEPTS </span>To{" "}
          <span className="text-yellow-400">PRODUCTIONS</span>
        </h2>

        <div className="grid gap-12 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.name}
              className="group relative h-107.5 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/70 transition-all duration-500 hover:border-yellow-300/40 hover:shadow-[0_0_30px_rgba(250,204,21,0.2)]"
            >
              <div className="absolute inset-0">
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  fill
                  sizes="(max-width: 768px) 92vw, (max-width: 1280px) 46vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/65 to-black/10" />

              <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-5 pt-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-bold text-white">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-yellow-400/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-yellow-300 transition-colors hover:bg-yellow-400 hover:text-black"
                      >
                        Live Link
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.name} GitHub repository`}
                        className="rounded-full border border-white/45 bg-black/40 p-2 text-white transition-colors hover:border-yellow-400/70 hover:text-yellow-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-3.5 w-3.5"
                          aria-hidden="true"
                        >
                          <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.08 1.84 2.82 1.31 3.5 1 .11-.78.42-1.31.76-1.62-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.64.24 2.86.12 3.16.76.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <div className="mt-2 flex flex-wrap gap-2">
                  <span
                    className={`rounded-full px-2.5 py-1 text-[14px] font-semibold uppercase tracking-wide ${
                      project.projectType === "Personal"
                        ? "bg-yellow-400 text-black"
                        : "border border-white/30 bg-black/30 text-white"
                    }`}
                  >
                    {project.projectType}
                  </span>
                  <span className="rounded-full border border-yellow-300/35 bg-black/30 px-2.5 py-1 text-[14px] text-yellow-200">
                    {project.contribution}
                  </span>
                </div>

                <div className="mt-2 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={`${project.name}-${tech}`}
                      className="rounded-full border border-white/20 bg-black/35 px-2.5 py-1 text-[14px] text-white/85"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-3 max-h-0 -translate-y-2 overflow-hidden text-md leading-relaxed text-white/75 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:translate-y-0 group-hover:opacity-100">
                  {project.about}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

