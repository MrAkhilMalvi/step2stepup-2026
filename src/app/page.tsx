import type { Metadata } from "next";
import Home from "../views/Home";

export const metadata: Metadata = {
  title: "Step2StepUp - Empowering Young Adults",
  description:
    "Step2StepUp Inc. guides young adults toward financial independence and entrepreneurial success through education, mentorship, and community support.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <Home />;
}
