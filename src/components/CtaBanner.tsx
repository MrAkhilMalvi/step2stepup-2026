import React from "react";
import { CTA_BANNER } from "../constants/siteData";
import { CircleArrowIcon } from "./icons/Icons";



const CtaBanner: React.FC = () => {
  const [beforeFirstStep, afterFirstStep] = CTA_BANNER.text.split("first step");

  return (
    <section className="bg-[#C8A04B] py-[60px]">
      <div className="mx-auto flex max-w-[1140px] flex-col items-center gap-8 px-6 text-center">
        <p className="max-w-[980px] font-sans text-[clamp(1.85rem,4vw,2.2rem)] font-bold leading-[1.45] text-white">
          {beforeFirstStep}
          <span className="underline">first step</span>
          {afterFirstStep}
        </p>

        <a
          href={CTA_BANNER.href}
          className="inline-flex items-center gap-3 rounded-[10px] bg-[#08173E] px-10 py-5 font-sans text-lg font-medium text-white transition-all duration-300 hover:bg-[#0188BF]"
        >
          <span>{CTA_BANNER.label}</span>
          <CircleArrowIcon />
        </a>
      </div>
    </section>
  );
};

export default CtaBanner;
