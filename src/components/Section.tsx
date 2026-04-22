"use client";

import React, { useEffect, useRef } from "react";
import { ContentSection } from "../constants/siteData";

interface Props {
  section: ContentSection;
}

const Section: React.FC<Props> = ({ section }) => {
  const { id, heading, body, image, imageLeft } = section;
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;
    const el = imgRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(
            imageLeft ? "animate-fadeInLeft" : "animate-fadeInRight"
          );
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [imageLeft]);

  /* ================= IMAGE BLOCK ================= */

  const ImageBlock = ({ right = false }: { right?: boolean }) => (
    <div
      className={`flex-1 flex ${
        right ? "md:justify-end justify-center" : "md:justify-start justify-center"
      } relative w-full`}
    >
      {/* Background plate */}
      <div
        className={`absolute w-[85%] h-[85%] bg-[#c7dbe6] z-0
        ${
          right
            ? "md:-bottom-6 md:-right-6 -bottom-3 -right-3"
            : "md:-bottom-6 md:-left-6 -bottom-3 -left-3"
        }`}
      ></div>

      {/* Image */}
      <img
        ref={imgRef}
        src={image}
        alt={heading}
className="relative z-10 w-full md:max-w-[600px] lg:max-w-[700px] transition-all duration-300"      />
    </div>
  );

  /* ================= TEXT BLOCK ================= */

  const TextBlock = () => (
    <div className="flex-1 w-full">
      {/* Heading */}
      <h2 className="font-slab font-bold text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] text-[#1e88b6] leading-snug mb-4">
        {heading}
      </h2>

      {/* Body */}
      {body?.map((para, i) => (
        <p
          key={i}
          className="text-[15px] sm:text-[16px] md:text-[18px] text-[#333] leading-relaxed md:leading-[1.9] mb-4 text-justify"
        >
          {para}
        </p>
      ))}

      {/* CTA BUTTON */}
      {section.cta && (
        <div className="mt-6">
          <a
            href={section.cta.href}
            className="inline-flex items-center gap-3 bg-[#0b1f3a] text-white px-5 py-3 sm:px-6 rounded-lg font-semibold tracking-wide text-xs sm:text-sm transition-all duration-200 hover:bg-[#132c52]"
          >
            {section.cta.label}

            {/* Arrow */}
            <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 border border-white rounded-full">
              <svg viewBox="0 0 512 512" className="w-3 h-3 fill-white">
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-40 344l-24-24 72-72-72-72 24-24 96 96-96 96z" />
              </svg>
            </span>
          </a>
        </div>
      )}
    </div>
  );

  /* ================= RETURN ================= */

  return (
    <section id={id} className="w-full py-14 sm:py-16 md:py-20 bg-[#f3f5f7]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        {image && (
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-20">
            {imageLeft ? (
              <>
                <ImageBlock />
                <TextBlock />
              </>
            ) : (
              <>
                <TextBlock />
                <ImageBlock right />
              </>
            )}
          </div>
        )}
      </div>  
    </section>
  );
};

export default Section;
