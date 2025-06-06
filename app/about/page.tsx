import { AboutCard } from "@/components/about/about-card";
import { PersonalCard } from "@/components/PersonalCard";
import RotatingBackground from "@/components/RotatingBackground";

export default function About() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <RotatingBackground />
      <div className="mt-4 w-full flex flex-col lg:flex-row">
        {/* Personal Card */}
        <div className="w-full lg:w-[416px] lg:fixed  ">
          <PersonalCard />
        </div>

        {/* About Card */}
        <div className="w-full  lg:ml-[calc(32.5%+1rem)]  lg:w-2/3">
          <AboutCard />
        </div>
      </div>
    </main>
  );
}
