import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS, IMAGES } from "../constants/siteData";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const current = location.pathname.replace(/\/$/, "") || "/";

  return (
    <header className="w-full border-b border-black/5 bg-white sticky top-0 z-50">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={IMAGES.logo}
            alt="Step2StepUp logo"
            className="h-[65px] object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center lg:flex">
          <nav className="flex items-center">
            {NAV_LINKS.map((link) => {
              const isActive = current === link.href;

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-3 text-[15px] xl:text-[16px] font-semibold transition-colors duration-200
                    ${
                      isActive
                        ? "bg-[#c8a04b] text-white"
                        : "text-[#1e2a5a] hover:bg-[#0188bf] hover:text-white"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

        </div>

        {/* Mobile Toggle */}
        <button
          className="text-[#0188bf] lg:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg viewBox="0 0 448 512" className="w-7 h-7 fill-current">
            <path d="M16 132h416c8.8 0 16-7.2 16-16V76c0-8.8-7.2-16-16-16H16C7.2 60 0 67.2 0 76v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0 0 16 0 16v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8 0-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16z" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white px-6 pb-6 pt-2 shadow-lg lg:hidden">
          {NAV_LINKS.map((link) => {
            const isActive = current === link.href;

            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className={`block border-b border-gray-100 px-4 py-3 text-[15px] font-semibold transition-colors duration-200
                  ${
                    isActive
                      ? "bg-[#c8a04b] text-white"
                      : "text-[#1e2a5a] hover:bg-[#0188bf] hover:text-white"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}


        </div>
      )}
    </header>
  );
};

export default Header;