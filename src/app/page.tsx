import { Hero } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { Benefits } from "@/components/sections/benefits";
import { Services } from "@/components/sections/services";
import { Inclusion } from "@/components/sections/inclusion";
import { Testimonials } from "@/components/sections/testimonials";
import { Partners } from "@/components/sections/partners";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Benefits />
      <Services />
      <Inclusion />
      <Testimonials />
      <Partners />
      <CtaBanner />
    </>
  );
}
