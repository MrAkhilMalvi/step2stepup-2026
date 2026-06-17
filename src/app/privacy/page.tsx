import type { Metadata } from "next";
import PrivacyPolicy from "../../views/PrivacyPolicy";

export const metadata: Metadata = {
title: "Privacy Policy",
description:
"Read the Privacy Policy to understand how information is collected, used, protected, and managed.",
alternates: {
canonical: "/privacy",
},
};

export default function PrivacyPage() {
return <PrivacyPolicy />;
}