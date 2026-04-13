import { HeroSection, Navbar, About, Projects } from "@/components/home";

export default function Home() {
  return (
    <div className="bg-gray-950">
      <Navbar />
      <main>
        <HeroSection />
      </main>
      <main className="flex justify-center">
        <About/>
      </main>
      <Projects/>
    </div>
  );
}
