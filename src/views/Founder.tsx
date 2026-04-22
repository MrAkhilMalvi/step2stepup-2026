"use client";

import { useEffect, useState } from "react";
import CtaBanner from "../components/CtaBanner";
import { ChevronLeftIcon, ChevronRightIcon } from "../components/icons/Icons";
import { cofounderBio, cofounderProfile, founderBio, founderProfile, galleryImages, getSlidesPerView, goalParagraphs } from "../constants/siteData";

const Founder = () => {
  const [slidesPerView, setSlidesPerView] = useState(() =>
    typeof window === "undefined" ? 1 : getSlidesPerView(window.innerWidth)
  );
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView(window.innerWidth));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlide = Math.max(0, galleryImages.length - slidesPerView);

  useEffect(() => {
    setCurrentSlide((previousSlide) => Math.min(previousSlide, maxSlide));
  }, [maxSlide]);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? maxSlide : prev - 1));
  };
  const handleNext = () => {
    setCurrentSlide((prev) => (prev === maxSlide ? 0 : prev + 1));
  };

  const paginationDots = Array.from({ length: maxSlide + 1 }, (_, index) => index);

  return (
    <main className="bg-white">
      {/* =========================================
          MEET THE FOUNDER
      ========================================= */}
      <section className="bg-[#08173E] py-[30px]">
        <div className="mx-auto max-w-[1140px] px-6">
          <h1 className="text-center font-sans text-[clamp(2rem,4vw,3rem)] font-semibold text-white">
            Our Leadership
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1140px] px-6 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Image Left */}
          <div className="w-full md:w-5/12 lg:w-1/3 shrink-0 sticky top-10">
            <img
              src={founderProfile.image}
              alt="Vasu Pawar"
              className="w-full aspect-[4/5] object-cover rounded-2xl"
              // className="w-full rounded-2xl shadow-xl border border-gray-100 object-cover"
            />
          </div>

          {/* Text Right - Full Bio */}
          <div className="w-full md:w-7/12 lg:w-2/3 flex flex-col justify-center space-y-6">
            <div>
              <h2 className="font-sans text-[clamp(1.5rem,2.5vw,2.5rem)] font-semibold text-[#C8A04B]">
                {founderProfile.name}
              </h2>
              <div className="mt-2 space-y-1 text-[1.1rem] font-bold text-[#1f2937]">
                {founderProfile.titles.map((title) => (
                  <p key={title}>{title}</p>
                ))}
              </div>
            </div>

            <div className="space-y-5 text-[16px] leading-[1.8] text-[#555555] text-justify md:text-justify">
              {founderBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>



      <section className="bg-gray-50 pb-16 pt-12">
        <div className="mx-auto max-w-[1140px] px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            
            {/* Text Left - Full Bio */}
            <div className="w-full md:w-7/12 lg:w-2/3 flex flex-col justify-center space-y-6 order-2 md:order-1">
              <div>
                <h2 className="font-sans text-[clamp(1.5rem,2.5vw,2.5rem)] font-semibold text-[#C8A04B]">
                  {cofounderProfile.name}
                </h2>
                <div className="mt-2 space-y-1 text-[1.1rem] font-bold text-[#1f2937]">
                  {cofounderProfile.titles.map((title) => (
                    <p key={title}>{title}</p>
                  ))}
                </div>
              </div>

              <div className="space-y-5 text-[16px] leading-[1.8] text-[#555555] text-justify md:text-justify">
                {cofounderBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Image Right */}
            <div className="w-full md:w-5/12 lg:w-1/3 shrink-0 order-1 md:order-2 sticky top-10">
              <img
                src={cofounderProfile.image}
                alt={cofounderProfile.name}
                className="w-full aspect-[4/5] object-cover rounded-2xl"
                // className="w-full rounded-2xl shadow-xl border border-gray-200 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          GALLERY
      ========================================= */}
      <section id="gallery" className="mx-auto max-w-[1140px] scroll-mt-24 px-6 py-16">
        <div className="space-y-8">
          <h2 className="text-center font-sans text-[clamp(2rem,4vw,3rem)] font-semibold text-[#08173E]">
            PAST EVENTS BY STEP2STEPUP
          </h2>

          <div className="relative">
            <div className="-mx-3 overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${(100 / slidesPerView) * currentSlide}%)`,
                }}
              >
                {galleryImages.map((image, idx) => (
                  <div
                    key={idx}
                    className="shrink-0 px-3"
                    style={{ flexBasis: `${100 / slidesPerView}%` }}
                  >
                    <figure className="overflow-hidden rounded-xl bg-white shadow-lg border border-gray-100">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-[240px] w-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </figure>
                  </div>
                ))}
              </div>
            </div>

            {galleryImages.length > slidesPerView && (
              <>
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#08173E] shadow-xl border border-gray-100 transition-colors duration-200 hover:bg-[#08173E] hover:text-white"
                >
                  <ChevronLeftIcon />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#08173E] shadow-xl border border-gray-100 transition-colors duration-200 hover:bg-[#08173E] hover:text-white"
                >
                  <ChevronRightIcon />
                </button>
              </>
            )}
          </div>

          {paginationDots.length > 1 && (
            <div className="flex items-center justify-center gap-2">
              {paginationDots.map((dot) => (
                <button
                  key={dot}
                  type="button"
                  onClick={() => setCurrentSlide(dot)}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-200 ${
                    dot === currentSlide
                      ? "bg-[#08173E] w-6"
                      : "bg-[#d1d5db] hover:bg-[#94a3b8]"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =========================================
          THE REAL GOAL
      ========================================= */}
      <section className="bg-[#FFE1A1] py-16">
        <div className="mx-auto max-w-[1140px] px-6">
          <div className="space-y-6 text-center max-w-4xl mx-auto">
            <h2 className="font-sans text-[clamp(2rem,4vw,3rem)] font-bold text-[#08173E]">
              The Goal
            </h2>
            <div className="space-y-5 text-[16px] leading-[1.9] text-gray-800 text-justify md:text-justify">
              {goalParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
};

export default Founder;
