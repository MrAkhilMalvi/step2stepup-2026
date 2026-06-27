"use client";

import React, { useState } from "react";
import CtaBanner from "../components/CtaBanner";
import { events, sectionTone } from "../constants/siteData";
import { EventButton } from "../components/ui/EventButton";

const Events: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <main className="bg-white font-sans overflow-hidden relative">
      {/* Page Header */}
      <section className="bg-[#08173E] py-[30px] md:py-[40px] relative">
        <div className="mx-auto max-w-[1140px] px-4 md:px-6">
          <h1 className="text-center text-[clamp(1.8rem,4vw,3rem)] font-semibold text-white tracking-wide">
            Events of Step2StepUp
          </h1>
        </div>
      </section>

      {/* =========================================
          1. FEATURED EVENT: ICONIQ GLOBAL AWARDS 2026
      ========================================= */}
      <section className="relative bg-white py-[50px] md:py-[80px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#C8A04B] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

        <div className="mx-auto max-w-[1140px] px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column */}
            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 md:space-y-6">
              <div>
                <h2 className="text-[14px] md:text-[16px] font-bold tracking-widest text-[#08173E] opacity-80 uppercase">
                  MAY 2026
                </h2>

                <h3 className="text-[clamp(1.75rem,3vw,2.45rem)] font-bold text-[#C8A04B] leading-tight mt-1">
                  ICONIQ GLOBAL AWARDS 2026
                </h3>

                <div className="text-[15px] md:text-[16px] space-y-4 leading-[1.8] md:leading-[1.9] mt-4 md:mt-5 text-[#555555]">
                  <p>
                    Step2StepUp Inc. organized the Iconiq Global Awards 2026 and
                    officially launched the ICONIQ GLOBAL Magazine, on May 17
                    2026, as a celebration of excellence, empowerment,
                    leadership, and cultural diversity. The event was hosted in
                    Ontario, California and brought together distinguished
                    dignitaries, influential leaders, entrepreneurs, artists,
                    and community members.
                  </p>
                  <p>
                    Chief Guest of Honor Dr. K. J. Srinivasa, accompanied by
                    Ashwini Srinivasa, delivered keynote addresses focusing on
                    leadership, humanity, service, and hope for future
                    generations. Among notable attendees of the event was
                    California State Treasurer, Fiona Ma. A key highlight of the
                    event was the official launch of ICONIQ GLOBAL Magazine,
                    dedicated to showcasing iconic voices, influential stories,
                    and global changemakers.
                  </p>
                  <p>
                    Bobbie Chance, who was featured on the magazine’s cover, was
                    honored at the event. She also shared her experiences as a
                    coach to top Hollywood stars, motivating others to pursue
                    their dreams fearlessly. During the ceremony, 24 awardees
                    were honored, with each award linked to a principle of life
                    as represented by the Ashoka Chakra.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4 mt-4  w-full">
                <EventButton
                  href="https://www.newindiaabroad.com/english/indian-diaspora-community/step2stepup-hosts-awards-night-in-ontario-ca"
                  label="READ MORE"
                  variant="link"
                />
              </div>
            </div>

            {/* Right Column: Media Container */}
            <div className="w-full flex flex-col items-center lg:items-end gap-6 mt-8 lg:mt-0">
              {/* Single Static Image Block */}
              <div
                className="w-full flex justify-center lg:justify-end cursor-pointer"
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                <div className="w-full max-w-[320px] md:max-w-[440px] max-h-[600px] md:max-h-[640px] rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-[#C8A04B]/40 overflow-hidden bg-white flex items-center justify-center transform transition-transform duration-300 hover:scale-[1.01]">
                  <img
                    src="/images/events/iconiq_global_awards.jpg"
                    alt="ICONIQ Global Awards 2026"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* =========================================
              NEW: SIDE-BY-SIDE IFRAMES CONTAINER
          ========================================= */}
          <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-8 w-full max-w-[1140px] mx-auto">
            <div className="w-full md:w-1/2 max-w-[550px] relative">
              <div className="absolute -top-10 left-0 w-full">
                <h3 className="text-center text-xl md:text-2xl font-bold text-[#C8A04B]">
                  Iconiq Global Magazine - 1st Edition
                </h3>
              </div>

              <div className="aspect-[550/350] rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-[#C8A04B]/30 overflow-hidden bg-white">
                <iframe
                  className="w-full h-full"
                  src="http://online.anyflip.com/jykgc/umpk/"
                  seamless={true}
                  scrolling="no"
                  frameBorder="0"
                  allowTransparency={true}
                  allowFullScreen={true}
                />
              </div>
            </div>

            {/* Right Side: YouTube */}
            <div className="w-full md:w-1/2 max-w-[550px] aspect-[550/350] rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-[#C8A04B]/30 overflow-hidden bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/m2w048PSF5o?si=jruuZhoQAtxhE55B"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. EXISTING EVENTS MAPPING
          ========================================= */}
      {events.map((event) => {
        const isGopioEvent = event.title.includes(
          "YOUTH CONFERENCE - GOPIO International 2026",
        );
        const extEvent = event as typeof event & {
          hoverImage?: string;
          videoUrl?: string;
        };

        const isLogo =
          event.image.includes("logo") || event.image.includes("GOPIO");
        let displayTitle = event.title;
        let displayEyebrow = event.eyebrow;

        if (
          displayTitle.toUpperCase().includes("CONCLAVE") &&
          displayTitle.includes("24")
        ) {
          displayEyebrow = displayEyebrow.replace(/upcoming/gi, "").trim();
          displayTitle = displayTitle.replace(/upcoming/gi, "").trim();
        }

        const imageBlock = (
          <div
            className={`w-full flex flex-col gap-6 items-center justify-center ${event.imageLeft ? "lg:justify-start" : "lg:justify-end"}`}
          >
            <div
              className={`w-full max-w-[500px] lg:max-w-[440px] ${
                extEvent.enableHover
                  ? "relative cursor-pointer transform transition-transform duration-500 hover:scale-[1.02] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden"
                  : isGopioEvent
                    ? "rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-[#C8A04B]/30 bg-white p-2"
                    : "rounded-xl"
              }`}
            >
              <img
                src={event.image}
                alt={event.imageAlt}
                className={`w-full object-contain ${
                  isLogo ? "max-w-[280px] md:max-w-[350px] mx-auto" : ""
                } ${
                  extEvent.enableHover
                    ? "transition-opacity duration-700 ease-in-out hover:opacity-0"
                    : "rounded-lg"
                }`}
              />
              {extEvent.enableHover && extEvent.hoverImage && (
                <img
                  src={extEvent.hoverImage}
                  alt={`${event.imageAlt} hover`}
                  className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                />
              )}
            </div>

            {/* Embedded Iframe Player specifically for GOPIO International 2026 Section */}
            {isGopioEvent && (
              <div className="w-full max-w-[500px] lg:max-w-[440px]">
                <div className="relative w-full aspect-video rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-[#C8A04B]/30 overflow-hidden bg-black">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/ZYIaXR4E_DI?si=hvbo8OMn3LMuB5nw&start=497"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        );

        const textBlock = (
          <div className="flex flex-col gap-4 text-center lg:text-left w-full">
            {displayEyebrow && (
              <h2 className="text-[14px] md:text-[16px] font-bold tracking-widest text-[#08173E] opacity-80 uppercase">
                {displayEyebrow}
              </h2>
            )}
            <h3 className="text-[clamp(1.5rem,2.5vw,2.45rem)] font-bold text-[#C8A04B] leading-tight">
              {displayTitle}
            </h3>
            <div className="space-y-3 md:space-y-4 text-[15px] md:text-[16px] leading-[1.8] md:leading-[1.9] text-[#555555]">
              {event.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Actions Container */}
            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-3">
              {event.actions.map((action) => (
                <EventButton key={action.href} {...action} />
              ))}

              {/* Render global recording button ONLY if it isn't the GOPIO 2026 event */}
              {extEvent.videoUrl && !isGopioEvent && (
                <button
                  onClick={() => setActiveVideo(extEvent.videoUrl!)}
                  className="bg-transparent border-2 border-red-600 text-red-600 font-bold text-[13px] md:text-[15px] px-4 py-3 md:px-4 md:py-5 rounded-xl hover:bg-red-600 hover:text-white hover:shadow-[0_10px_20px_rgba(220,38,38,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 w-fit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 md:w-6 md:h-6"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                  View Recording of the Webinar
                </button>
              )}
            </div>
          </div>
        );

        const gridClass = event.imageLeft
          ? "lg:grid-cols-[minmax(0,40%)_minmax(0,60%)]"
          : "lg:grid-cols-[minmax(0,60%)_minmax(0,40%)]";

        return (
          <section
            key={`${event.eyebrow}-${event.title}`}
            className={`${event.tinted ? sectionTone[event.tinted] : sectionTone.none} w-full`}
          >
            <div className="mx-auto max-w-[1140px] px-4 md:px-6 py-[50px] md:py-[70px]">
              <div
                className={`grid items-center gap-10 md:gap-12 ${gridClass} ${event.imageLeft ? "" : "flex flex-col-reverse lg:grid"}`}
              >
                {event.imageLeft ? (
                  <>
                    {imageBlock}
                    {textBlock}
                  </>
                ) : (
                  <>
                    {textBlock}
                    {imageBlock}
                  </>
                )}
              </div>
            </div>
          </section>
        );
      })}

      <CtaBanner />

      {/* =========================================
          MODERN PDF MODAL
      ========================================= */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#08173E]/90 backdrop-blur-md p-4 transition-opacity duration-300 ease-out"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl h-[80vh] md:h-[85vh] bg-transparent flex items-center justify-center group mt-8 md:mt-0"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 md:-right-8 text-white hover:text-[#C8A04B] transition-colors duration-300 z-50 p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-8 h-8 md:w-10 md:h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="w-full h-full rounded-2xl shadow-2xl overflow-hidden bg-white border-2 border-white/10 relative z-40">
              <iframe
                src="https://drive.google.com/file/d/1SISyUoAwBndgRt7YhB3C4PwurWUAswds/preview"
                title="Awards Night 2026 Brochure"
                className="w-full h-full border-none"
                allow="autoplay"
              />
            </div>
          </div>
        </div>
      )}

      {/* =========================================
          NEW YOUTUBE VIDEO POP-UP MODAL
      ========================================= */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#08173E]/95 backdrop-blur-md p-4 transition-opacity duration-300 ease-out"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden border border-white/20 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-2 right-2 md:-top-12 md:right-0 text-white/80 hover:text-red-500 transition-colors duration-300 z-50 p-2 bg-black/60 md:bg-transparent rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-8 h-8 md:w-10 md:h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <iframe
              src={`${activeVideo}?autoplay=1`}
              title="YouTube video player"
              className="w-full h-full border-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default Events;
