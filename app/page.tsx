import { ExpertArea } from "@/components/ExpertArea";
import { ServiceIOfferCard } from "@/components/ServiceIOfferCard";
import { PersonalCard } from "@/components/PersonalCard";
import { RecentProjects } from "@/components/RecentProjects";
import RotatingBackground from "@/components/RotatingBackground";
import { WorkExperience } from "@/components/WorkExperience";
import { LetsWorkTogether } from "@/components/LetsWorkTogether";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <RotatingBackground />

      <div className="mt-4 w-full flex flex-col space-y-4 ">
        <div className="flex flex-col lg:flex-row gap-4 items-start">
          {/* Left column: PersonalCard */}
          <div className="w-full lg:w-1/3">
            <PersonalCard />
          </div>

          {/* Center column: WorkExperience + ExpertArea */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <WorkExperience />
            <ExpertArea />
          </div>

          {/* Right column: RecentProjects */}
          <div className="w-full lg:w-1/3">
            <RecentProjects />
          </div>

          
        </div>

        <div className="w-full flex-col lg:flex-row flex items-center gap-4 ">
            <div className="w-full lg:w-2/3">
              <ServiceIOfferCard/>
            </div>
            <div className="w-full lg:w-1/3">
              <LetsWorkTogether/>
            </div>
          </div>
      </div>
    </main>
  );
}
