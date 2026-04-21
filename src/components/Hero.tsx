import React from "react";
import { HERO } from "../constants/siteData";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center text-center overflow-hidden">
      
      {/* YouTube Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <iframe
          title="hero-bg"
          src={`https://www.youtube.com/embed/${HERO.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${HERO.youtubeId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
          allow="autoplay; encrypted-media"
          className="absolute top-1/2 left-1/2 w-screen h-screen min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 scale-[1.8]"
          style={{ border: "none" }}
        />
      </div>



      {/* Content */}
      <div className="relative z-10 px-6 max-w-full mx-auto">
        <h3 className="text-[#d4af37] font-['Roboto_Slab'] text-lg md:text-2xl font-medium mb-6 tracking-wide">
          {HERO.subtitle}
        </h3>

        <h1 className="text-white font-['Roboto_Slab'] font-extrabold uppercase leading-tight text-3xl md:text-5xl lg:text-6xl tracking-wide whitespace-nowrap overflow-hidden text-ellipsis">
          {HERO.title}
        </h1>
      </div>
    </section>
  );
};

export default Hero;