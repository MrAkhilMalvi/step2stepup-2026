import { EventAction } from "../../constants/siteData";
import { ArrowDownIcon, ArrowRightIcon } from "../../components/icons/Icons";

export const EventButton: React.FC<EventAction> = ({
  href,
  label,
  variant = "link",
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-[#0b1f44] px-10 py-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0188BF]"
  >
    <span className="tracking-wide text-sm text-center">{label}</span>
    {variant === "download" ? <ArrowDownIcon /> : <ArrowRightIcon />}
  </a>
);
