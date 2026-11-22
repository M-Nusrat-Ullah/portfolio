import { Hero } from "@/components/sections/hero";
import { FeaturedWork } from "@/components/sections/featured-work";
import { MoreWork } from "@/components/sections/more-work";
import { Research } from "@/components/sections/research";
import { PersonalEngineering } from "@/components/sections/personal-engineering";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <MoreWork />
      <Research />
      <PersonalEngineering />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </>
  );
}
