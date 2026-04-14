"use client";

type SectionKey = "home" | "about" | "projects" | "contact";

type NavbarProps = {
  activeSection: SectionKey;
  onNavigate: (section: SectionKey) => void;
};

const NAV_ITEMS: Array<{ key: SectionKey; label: string }> = [
  { key: "home", label: "Home" },
  { key: "about", label: "About" },
  { key: "projects", label: "Projects" },
  { key: "contact", label: "Contact" },
];

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-999">
      <nav className="mx-auto mt-4 flex w-[min(1200px,calc(100%-2rem))] items-center justify-between rounded-full border border-yellow-400/35 bg-black/70 px-5 py-3 text-white backdrop-blur-md md:px-7">
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="cursor-pointer text-base font-extrabold leading-none tracking-tight text-white"
        >
          <span className="text-yellow-400">GAURAV</span> SINGH
        </button>

        <div className="hidden items-center gap-6 text-sm text-white/90 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => onNavigate(item.key)}
              className={
                activeSection === item.key
                  ? "cursor-pointer rounded-full bg-yellow-400 px-4 py-1 font-semibold text-black"
                  : "cursor-pointer transition-colors hover:text-yellow-300"
              }
            >
              {item.label}
            </button>
          ))}
        </div>

        <a
          href="/Resume_GauravSingh.pdf"
          download="Resume_GauravSingh.pdf"
          className="rounded-full border border-yellow-400 bg-yellow-400 px-4 py-2 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
        >
          Download CV
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
