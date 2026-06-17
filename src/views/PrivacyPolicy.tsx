"use client";

import React from "react";

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      title: "1. Collection of Information",
      content: [
        "We collect various types of information to provide a safe, efficient, and customized experience. This may include IP address, referring site, date and time, operating system, screen resolution, browser type, pages visited, hostname, connection speed, and client information such as domain and IP.",
        "Additionally, we use cookies and similar technologies to enhance user experience and collect anonymous usage statistics."
      ]
    },
    {
      title: "2. Use of Collected Information",
      content: [
        "We use your data to improve our services, diagnose server issues, identify users, and conduct internal analytics. Cookies help with session management and personalizing your experience."
      ]
    },
    {
      title: "3. Sharing of Personal Information",
      content: [
        "We may share personal information with affiliates or when legally required. We do not sell your data. Disclosure may occur in good faith for legal obligations or protection of rights."
      ]
    },
    {
      title: "4. User Rights",
      content: [
        "You have the right to access, modify, or delete your data. Contact us through the designated channels to exercise your rights."
      ]
    },
    {
      title: "5. Data Retention",
      content: [
        "We retain data only as long as necessary for service delivery and legal compliance, after which it is securely deleted or anonymized."
      ]
    },
    {
      title: "6. Security",
      content: [
        "We implement robust security protocols including encryption and secure servers to protect your data from unauthorized access."
      ]
    },
    {
      title: "7. Choice/Opt-Out",
      content: [
        "Users can opt out of receiving non-essential communications. Instructions are available in your account settings or by contacting support."
      ]
    },
    {
      title: "8. External Links",
      content: [
        "Our site may link to third-party websites. We are not responsible for their content or privacy practices."
      ]
    },
    {
      title: "9. Advertisements",
      content: [
        "We may use third-party advertising partners. These partners may collect non-identifiable data for ad targeting."
      ]
    },
    {
      title: "10. Consent",
      content: [
        "By using our website and services, you consent to the collection and use of information as described in this policy."
      ]
    },
    {
      title: "11. International Compliance",
      content: [
        "For users outside India, your data may be transferred to India. We comply with global regulations such as GDPR and CCPA/DPDPA."
      ]
    },
    {
      title: "12. Governing Law",
      content: [
        "Disputes related to this policy will be governed by the laws of India."
      ]
    }
  ];

  return (
    <div className="w-full bg-[#f3f5f7] py-12 sm:py-16 md:py-20 min-h-screen">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Document Header */}
        <div className="mb-10 pb-8 border-b border-gray-200">
          <span className="text-[#1e88b6] font-semibold tracking-wider text-sm uppercase">
            Privacy Policy
          </span>
          <h1 className="font-slab font-bold text-[28px] sm:text-[36px] md:text-[44px] text-[#0b1f3a] leading-tight mt-2 mb-3">
            Privacy Policy
          </h1>
          <p className="text-lg font-semibold text-[#1e88b6] mb-4">
            Step2StepUp Inc.
          </p>
          <p className="text-[15px] sm:text-[16px] text-[#333] leading-relaxed md:leading-[1.9] text-justify max-w-[850px]">
            This policy explains how information is collected, used, protected, and managed when you use the Step2StepUp website. We value the trust you place in us, which is why we insist upon the highest standards for secure transactions and customer information privacy. Please read the following statement to learn about our information gathering and website-related practices.
          </p>
          <p className="mt-4 text-[14px] italic text-[#666]">
            Our privacy policy is subject to change at any time without notice. By visiting this Website, you agree to be bound by the terms and conditions of this Privacy Policy.
          </p>
        </div>

        {/* Content Block */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-10 space-y-8">
          {sections.map((sec, i) => (
            <div key={i} className="space-y-3">
              <h2 className="font-slab font-bold text-[18px] sm:text-[22px] text-[#1e88b6] leading-snug">
                {sec.title}
              </h2>
              {sec.content.map((p, pIndex) => (
                <p
                  key={pIndex}
                  className="text-[15px] sm:text-[16px] text-[#333] leading-relaxed md:leading-[1.9] text-justify"
                >
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;