import type { Metadata } from "next";
import Founder from "../../views/Founder";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the Step2StepUp leadership team guiding the nonprofit mission to empower young adults and aspiring entrepreneurs.",
  alternates: {
    canonical: "/founder",
  },
};

export default function FounderPage() {
  return <Founder />;
}
