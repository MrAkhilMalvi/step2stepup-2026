import type { Metadata } from "next";
import DonorManifesto from "../../views/DonorManifesto";

export const metadata: Metadata = {
  title: "Donor Motivation Manifesto",
  description:
    "Read the Step2StepUp donor manifesto and learn how contributions help young adults transform entrepreneurial dreams into impact.",
  alternates: {
    canonical: "/manifesto",
  },
};

export default function ManifestoPage() {
  return <DonorManifesto />;
}
