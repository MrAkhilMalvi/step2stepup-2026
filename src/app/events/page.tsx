import type { Metadata } from "next";
import Events from "../../views/Events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Explore Step2StepUp events, webinars, conferences, awards nights, and community programs for youth entrepreneurship and leadership.",
  alternates: {
    canonical: "/events",
  },
};

export default function EventsPage() {
  return <Events />;
}
