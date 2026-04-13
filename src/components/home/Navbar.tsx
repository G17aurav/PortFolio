"use client";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-999">
      <nav className="mx-auto mt-4 flex w-[min(1200px,calc(100%-2rem))] items-center justify-between rounded-full border border-yellow-400/35 bg-black/70 px-5 py-3 text-white backdrop-blur-md md:px-7">
        <a href="#home" className="text-base font-extrabold leading-none tracking-tight text-white">
          <span className="text-yellow-400">GAURAV</span> SINGH
        </a>

        <div className="hidden items-center gap-6 text-sm text-white/90 md:flex">
          <a href="#home" className="rounded-full bg-yellow-400 px-4 py-1 font-semibold text-black">
            Home
          </a>
          <a href="#about" className="transition-colors hover:text-yellow-300">
            About
          </a>
          <a href="#services" className="transition-colors hover:text-yellow-300">
            Services
          </a>
          <a href="#projects" className="transition-colors hover:text-yellow-300">
            Projects
          </a>
          <a href="#contact" className="transition-colors hover:text-yellow-300">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full border border-yellow-400 bg-yellow-400 px-4 py-2 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
        >
          Download CV
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
