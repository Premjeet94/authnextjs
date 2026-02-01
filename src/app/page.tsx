"use client";

import IntroLoader from "@/src/components/IntroLoader/page";
import Navbar from "@/src/components/Navbar/Navbar";
import HeroPage from "@/src/components/Hero/page";
import PageSection, {
  StaggerContainer,
  StaggerItem,
} from "@/src/components/IntroLoader/PageSection";
import WhatWeDo from "@/src/components/WhatWedo/WhatWeDo";

export default function HomePage() {
  return (
    <IntroLoader>
      <div className="bg-black min-h-screen">
        <Navbar />

        {/* HERO */}
       <HeroPage/>

        {/* SERVICES */}
        <PageSection id="services" className="py-24 min-h-screen">
          <StaggerContainer className="max-w-7xl mx-auto">
            <StaggerItem>
             <WhatWeDo/>
            </StaggerItem>
          </StaggerContainer>
        </PageSection>

        {/* PACKAGES */}
        <PageSection id="packages" className="py-24 px-4">
          <StaggerContainer className="max-w-7xl mx-auto">
            <StaggerItem>
              <h2 className="text-4xl text-white">Packages</h2>
            </StaggerItem>
          </StaggerContainer>
        </PageSection>
      </div>
    </IntroLoader>
  );
}
