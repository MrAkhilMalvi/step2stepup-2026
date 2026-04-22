import React from "react";
import Link from "next/link";
import { NAV_LINKS, IMAGES, FOOTER } from "../constants/siteData";
import { FacebookIcon, TwitterIcon, YoutubeIcon } from "./icons/Icons";

const icons = [FacebookIcon, TwitterIcon, YoutubeIcon];

const Footer: React.FC = () => {
  const { nonprofit, ein, mission, contact, copyright } = FOOTER;

  return (
    <footer className="bg-[#08173E]">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-12 px-6 py-[40px] md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)] md:py-[50px]">
        <div>
          <img
            src={IMAGES.logoDark}
            alt="Step2StepUp dark blue"
            className="mb-4 h-[96px]"
          />

          <p className="text-[15px] leading-[1.8] text-white">
            {nonprofit}
            <br />
            {ein}
          </p>

          <p className="mt-3 max-w-[420px] text-[15px] leading-[1.8] text-[#E3E3E3]">
            {mission}
          </p>
        </div>

        <div className="flex flex-col gap-6 md:pt-3">
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block rounded-sm px-2 py-1 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#49B4DE] hover:text-black"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-1 flex gap-4">
            {icons.map((Icon, i) => (
              <span
                key={i}
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  i === 0
                    ? "bg-[#3b5998]"
                    : i === 1
                      ? "bg-[#1da1f2]"
                      : "bg-[#ff0000]"
                }`}
                aria-hidden="true"
              >
                <Icon />
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <h4 className="text-[18px] font-semibold text-[#FFE1A1]">
            Connect with us
          </h4>

          <p className="text-[15px] leading-[1.9] text-[#E3E3E3]">
            Tel.: {contact.tel}
            <br />
            Email: {contact.email}
          </p>

          <p className="text-[15px] leading-[1.9] text-[#E3E3E3]">
            Founder:{" "}
            <span className="font-semibold text-white">{contact.founder}</span>
            <br />
            Founder Email: {contact.founderEmail}
          </p>

          <p className="text-[15px] leading-[1.9] text-[#E3E3E3]">
            Address: 9258, Rainsong Avenue,
            <br />
            Hesperia, CA 92344, USA
          </p>

          <p className="text-[15px] text-[#E3E3E3]">
            Website: {contact.website}
          </p>
        </div>
      </div>

      <div className="bg-[#0188BF] py-3 text-center text-[12px] text-white">
        {copyright}
      </div>
    </footer>
  );
};

export default Footer;
