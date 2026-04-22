import React from "react";

const DonorManifesto: React.FC = () => {
  return (
    <main className="bg-white font-sans overflow-hidden pb-20">
      {/* =========================================
          PAGE HEADER (Matched to Reference Theme)
      ========================================= */}
      <section className="bg-[#08173E] py-[30px] relative">
        <div className="mx-auto max-w-[1140px] px-6 flex flex-col items-center gap-2">
          <span className="text-[#C8A04B] text-xs md:text-sm font-semibold tracking-widest uppercase">
            Fulfilling Entrepreneurial Dreams
          </span>
          <h1 className="text-center text-[clamp(2rem,4vw,3rem)] font-semibold text-white tracking-wide">
            Donor Motivation Manifesto
          </h1>
          <p className="text-gray-300 font-light italic mt-1 text-sm md:text-base">
            "Building a Legacy of Impact."
          </p>
        </div>
      </section>

      {/* =========================================
          CORE MANIFESTO (INTRO)
      ========================================= */}
      <section className="py-[60px] md:py-[80px] px-6">
        <div className="max-w-[1000px] mx-auto text-center">
          <svg
            className="w-12 h-12 text-[#C8A04B] opacity-60 mx-auto mb-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-xl md:text-[30px] leading-[1.9] text-[#555555] font-light">
            At{" "}
            <strong className="font-bold text-[#08173E]">
              Step2StepUp Inc.
            </strong>
            , we believe that the greatest gift a successful person can offer
            the world is opportunity. We empower young adults between 19 and 45
            to rise from dreamers to doers, from job seekers to job creators.
            Each contribution helps ignite a journey of entrepreneurship that
            multiplies into jobs, innovation, and hope.
          </p>
        </div>
      </section>

      {/* =========================================
          WHY CONTRIBUTE (SPLIT LAYOUT)
      ========================================= */}
      <section className="bg-[#f9fafb] py-[60px] md:py-[80px] px-6 border-y border-gray-100">
        <div className="max-w-[1140px] mx-auto grid lg:grid-cols-[minmax(0,40%)_minmax(0,60%)] gap-12 items-center">
          {/* Left Title */}
          <div className="text-center lg:text-left">
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-extrabold text-[#08173E] leading-tight">
              Why Should You <br className="hidden lg:block" />
              <span className="text-[#C8A04B]">Contribute?</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#C8A04B] mx-auto lg:mx-0 mt-6 rounded-full"></div>
          </div>

          {/* Right Content Block */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border-l-[6px] border-[#C8A04B]">
            <p className="text-lg md:text-2xl leading-[1.8] text-[#555555]">
              Because success becomes significant only when it is shared. Your
              wealth has already brought you comfort; now it can bring change.
            </p>
            <p className="text-lg md:text-2xl leading-[1.8] mt-4 font-medium text-[#08173E]">
              Each dollar you contribute is not charity; it is seed capital for
              transformation. You are not giving away wealth, you are investing
              in humanity’s future.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          WHAT YOU ACHIEVE (3 FEATURE CARDS)
      ========================================= */}
      <section className="py-[60px] md:py-[80px] px-6">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-extrabold text-[#08173E]">
              What You <span className="text-[#C8A04B]">Achieve</span>
            </h2>
            <p className="text-[#555555] mt-4 text-xl">
              The direct result of your generosity and partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Legacy */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_15px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(200,160,75,0.15)] hover:-translate-y-2 transition-all duration-300 group text-center">
              <div className="w-20 h-20 mx-auto bg-[#08173E] group-hover:bg-[#C8A04B] transition-colors duration-300 rounded-full flex items-center justify-center mb-6 shadow-md">
                <svg
                  className="w-9 h-9 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-4m6 4v-4m-6-6h6m-6 4h6"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#08173E] mb-4">Legacy</h3>
              <p className="text-[#555555] text-lg">
                Your name stands behind every dream that becomes a business and
                entrepreneur.
              </p>
            </div>

            {/* Card 2: Impact */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_15px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(200,160,75,0.15)] hover:-translate-y-2 transition-all duration-300 group text-center">
              <div className="w-20 h-20 mx-auto bg-[#08173E] group-hover:bg-[#C8A04B] transition-colors duration-300 rounded-full flex items-center justify-center mb-6 shadow-md">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#08173E] mb-4">Impact</h3>
              <p className="text-[#555555]  text-lg">
                You help rewrite destinies, empowering generations to stand tall
                through enterprise.
              </p>
            </div>

            {/* Card 3: Fulfillment */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_15px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(200,160,75,0.15)] hover:-translate-y-2 transition-all duration-300 group text-center">
              <div className="w-20 h-20 mx-auto bg-[#08173E] group-hover:bg-[#C8A04B] transition-colors duration-300 rounded-full flex items-center justify-center mb-6 shadow-md">
                <svg
                  className="w-9 h-9 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#08173E] mb-4">
                Fulfillment
              </h3>
              <p className="text-[#555555]  text-lg">
                Witness tangible lives transformed and feel the emotional return
                on investment that only impact can bring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          RETURN ON INVESTMENT (BANNER/FOOTER)
      ========================================= */}
      <section className="px-6 py-[20px]">
        <div className="max-w-[1140px] mx-auto bg-[#08173E] rounded-3xl p-10 md:p-16 text-center shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-white mb-6">
              The True Return On{" "}
              <span className="text-[#C8A04B]">Investment</span>
            </h2>
            <p className="text-lg md:text-2xl leading-[1.8] text-gray-200 font-light max-w-4xl mx-auto">
              When you change one life, you change an entire community. When you
              empower one entrepreneur, you empower a generation. And when you
              invest in people, you invest in the very future of progress.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DonorManifesto;
