"use client";

import React from "react";

const CookiePolicy: React.FC = () => {
  return (
    <div className="w-full bg-[#f3f5f7] py-12 sm:py-16 md:py-20 min-h-screen">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Document Header */}
        <div className="mb-10 pb-8 border-b border-gray-200">
          <span className="text-[#1e88b6] font-semibold tracking-wider text-sm uppercase">
            Cookie Policy
          </span>
          <h1 className="font-slab font-bold text-[28px] sm:text-[36px] md:text-[44px] text-[#0b1f3a] leading-tight mt-2 mb-3">
            Cookie Policy
          </h1>
          <p className="text-lg font-semibold text-[#1e88b6] mb-4">
            Step2StepUp Inc.
          </p>
          <p className="text-[15px] sm:text-[16px] text-[#333] leading-relaxed md:leading-[1.9] text-justify max-w-[850px]">
            This policy explains how cookies help us maintain, improve, and personalize the Step2StepUp experience. This Cookie Policy applies to all websites, applications, and branded pages on third-party platforms (such as Facebook and YouTube) operated by or on behalf of Step2StepUp Inc.
          </p>
        </div>

        {/* Content Block */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-10 space-y-10">
          
          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="font-slab font-bold text-[20px] sm:text-[24px] text-[#1e88b6]">
              Consent & Preferences
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#333] leading-relaxed md:leading-[1.9] text-justify">
              By using Step2StepUp Inc. sites, you agree to our use of cookies as outlined in this policy. If you do not consent, you can adjust your browser settings to disable cookies. However, doing so may affect the functionality and user experience of our website.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="font-slab font-bold text-[20px] sm:text-[24px] text-[#1e88b6]">
              What Are Cookies?
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#333] leading-relaxed md:leading-[1.9] text-justify">
              Cookies are small text files stored on your computer, smartphone, or tablet when you visit a website. They typically contain:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[15px] sm:text-[16px] text-[#333]">
              <li>The name of the website they originate from</li>
              <li>Their duration (meaning how long they stay on your device)</li>
              <li>A unique identifier for tracking purposes</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="font-slab font-bold text-[20px] sm:text-[24px] text-[#1e88b6]">
              Why Do We Use Cookies?
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#333] leading-relaxed md:leading-[1.9] text-justify">
              At Step2StepUp, we use cookies to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[15px] sm:text-[16px] text-[#333]">
              <li>Improve website functionality and user experience</li>
              <li>Personalize content based on user preferences</li>
              <li>Analyze traffic and optimize website performance</li>
              <li>Enable social media sharing features</li>
            </ul>
            <p className="text-[15px] sm:text-[16px] text-[#333] leading-relaxed md:leading-[1.9] pt-2">
              We do not use cookies to personally identify users.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="font-slab font-bold text-[20px] sm:text-[24px] text-[#1e88b6]">
              Types of Cookies We Use
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#333] leading-relaxed md:leading-[1.9] text-justify">
              <strong>Session Cookies</strong> are active only while you browse our website and are deleted when you close your browser.
            </p>
            <p className="text-[15px] sm:text-[16px] text-[#333] leading-relaxed md:leading-[1.9] text-justify">
              <strong>Persistent Cookies</strong> are stored on your device for a set period to remember preferences and enhance future visits.
            </p>
            <p className="text-[15px] sm:text-[16px] text-[#333] leading-relaxed md:leading-[1.9] text-justify">
              You can manage or disable cookies through your browser settings, but this may limit certain website features.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="font-slab font-bold text-[20px] sm:text-[24px] text-[#1e88b6]">
              Google Analytics & Performance Tracking
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#333] leading-relaxed md:leading-[1.9] text-justify">
              We use Google Analytics to monitor website traffic and improve usability. These cookies help us analyze user behavior in an anonymous manner.
            </p>
            <p className="text-[15px] sm:text-[16px] text-[#333] leading-relaxed md:leading-[1.9]">
              Google&apos;s privacy policy can be found at{" "}
              <a 
                href="https://policies.google.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#1e88b6] hover:underline"
              >
                policies.google.com/privacy
              </a>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;