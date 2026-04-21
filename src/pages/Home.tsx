import React from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import CtaBanner from "../components/CtaBanner";
import { SECTIONS } from "../constants/siteData";

const Home: React.FC = () => (
  <main className="overflow-hidden">
    <Hero />
    
    {/* Mission text block (no image, no alternating) */}
    <section className="bg-[#c9a24a] py-12 md:py-20 text-center px-4 md:px-6">
      <div className="max-w-[1000px] mx-auto">
        {/* Tag (MISSION) */}
        <div className="inline-block px-4 py-1 mb-4 md:mb-6">
          <span className="text-[#0c0a5e] text-3xl md:text-4xl font-bold tracking-wide">
            {SECTIONS[0].tag}
          </span>
        </div>

        {/* Subheading */}
        <h3 className="text-white text-lg md:text-2xl mb-3 md:mb-4 font-medium px-2">
          {SECTIONS[0].heading}
        </h3>

        {/* Main Heading */}
        <h2 className="text-white font-['Roboto_Slab'] uppercase font-semibold leading-relaxed text-[18px] md:text-[26px] mb-6 md:mb-8 tracking-wide">
          {SECTIONS[0].title}
        </h2>

        {/* Description */}
        <p className="text-[#0c0a5e] text-[15px] md:text-[20px] font-medium max-w-full mx-auto leading-relaxed">
          {SECTIONS[0].desc}
        </p>
      </div>
    </section>

    {/* All remaining sections with image alternation */}
    {SECTIONS.slice(1).map((section) => (
      <Section key={section.id} section={section} />
    ))}
    
    <CtaBanner />
  </main>
);

export default Home;