"use client";

import React from "react";

const TermsConditions: React.FC = () => {
  const sections = [
    {
      title: "Acceptance",
      content: "By using the Site, you agree to these Terms & Conditions. If you do not agree, please refrain from using this Site."
    },
    {
      title: "Content & Intellectual Property",
      content: "All content is owned by Step2StepUp Inc. Unauthorized use, copying, reproduction, or distribution is strictly prohibited."
    },
    {
      title: "Disclaimer & Limitation of Liability",
      content: "The Site is provided on an 'as is' and 'as available' basis. The Company makes no representations or warranties of any kind and is not liable for any damages resulting from its use."
    },
    {
      title: "Third-Party Links",
      content: "We are not responsible for external websites linked from our Site. Clicking on these links is at your own risk."
    },
    {
      title: "User Information & Privacy",
      content: "Your data usage and details follow our Privacy Policy. We implement security protocols but cannot guarantee absolute security over transmission systems."
    },
    {
      title: "Indemnification",
      content: "You agree to indemnify, defend, and hold harmless the Company and its affiliates from any claims, losses, or damages arising from your use of the Site or breach of these terms."
    },
    {
      title: "Modifications",
      content: "The Company reserves the right to update, change, or modify the Site or these Terms without prior notice."
    },
    {
      title: "Contact Information",
      content: "For any queries or concerns regarding these Terms, contact us through the official contact channels provided by Step2StepUp Inc."
    }
  ];

  return (
    <div className="w-full bg-[#f3f5f7] py-12 sm:py-16 md:py-20 min-h-screen">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Document Header */}
        <div className="mb-10 pb-8 border-b border-gray-200">
          <span className="text-[#1e88b6] font-semibold tracking-wider text-sm uppercase">
            Terms & Conditions
          </span>
          <h1 className="font-slab font-bold text-[28px] sm:text-[36px] md:text-[44px] text-[#0b1f3a] leading-tight mt-2 mb-3">
            Terms & Conditions
          </h1>
          <p className="text-lg font-semibold text-[#1e88b6] mb-4">
            Step2StepUp Inc.
          </p>
          <p className="text-[15px] sm:text-[16px] text-[#333] leading-relaxed md:leading-[1.9] text-justify max-w-[850px]">
            Please read these terms carefully before using the Step2StepUp website. By accessing or using our services, you acknowledge that you have read, understood, and agreed to be bound by the terms detailed below.
          </p>
        </div>

        {/* Content Block */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-10 space-y-8">
          {sections.map((sec, i) => (
            <div key={i} className="space-y-3">
              <h2 className="font-slab font-bold text-[18px] sm:text-[22px] text-[#1e88b6] leading-snug">
                {sec.title}
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#333] leading-relaxed md:leading-[1.9] text-justify">
                {sec.content}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TermsConditions;