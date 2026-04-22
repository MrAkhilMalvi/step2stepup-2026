import type { Metadata, Viewport } from "next";
import { Roboto, Roboto_Slab } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-roboto-slab",
  display: "swap",
});

const title = "Step2StepUp - Empowering Young Adults";
const description =
  "Step2StepUp Inc. is a 501(c)(3) nonprofit empowering young adults toward financial independence and entrepreneurial success.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://step2stepup.org"),
  applicationName: "Step2StepUp",
  title: {
    default: title,
    template: "%s | Step2StepUp",
  },
  description,
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/step2step-logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Step2StepUp",
    title,
    description,
    images: [
      {
        url: "/images/home/Step2StepUp-logo.webp",
        alt: "Step2StepUp logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/home/Step2StepUp-logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body
        className={`${roboto.variable} ${robotoSlab.variable} min-h-screen font-sans`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
