import type { Metadata } from "next";
import TermsConditions from "../../views/TermsConditions";

export const metadata: Metadata = {
title: "Terms & Conditions",
description:
"Review the Terms & Conditions governing the use of our website, services, and content.",
alternates: {
canonical: "/terms",
},
};

export default function TermsPage() {
return <TermsConditions />;
}
