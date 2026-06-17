import type { Metadata } from "next";
import CookiePolicy from "../../views/CookiePolicy";

export const metadata: Metadata = {
title: "Cookie Policy",
description:
"Learn how cookies are used to improve functionality, personalize content, and enhance user experience.",
alternates: {
canonical: "/cookies",
},
};

export default function CookiesPage() {
return <CookiePolicy />;
}
