import type { Metadata } from "next";
import Connect from "../../views/Connect";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Step2StepUp Inc. for donations, contributions, partnership questions, and general nonprofit inquiries.",
  alternates: {
    canonical: "/connect",
  },
};

export default function ConnectPage() {
  return <Connect />;
}
