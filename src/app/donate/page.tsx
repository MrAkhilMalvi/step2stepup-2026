import type { Metadata } from "next";
import Donate from "../../views/Donate";

export const metadata: Metadata = {
  title: "Contribute Now",
  description:
    "Support Step2StepUp Inc. with secure contribution options for donations, tickets, sponsorships, booths, and advertisements.",
  alternates: {
    canonical: "/donate",
  },
};

export default function DonatePage() {
  return <Donate />;
}
