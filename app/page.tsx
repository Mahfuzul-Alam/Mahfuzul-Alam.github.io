import React from "react";
import { Hero } from "@/components/home/Hero";
import { Highlights } from "@/components/home/Highlights";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ExperienceSnapshot } from "@/components/home/ExperienceSnapshot";
import { ResearchInterestsSnapshot } from "@/components/home/ResearchInterestsSnapshot";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Highlights />
      <FeaturedProjects />
      <ExperienceSnapshot />
      <ResearchInterestsSnapshot />
      <ContactCTA />
    </div>
  );
}
