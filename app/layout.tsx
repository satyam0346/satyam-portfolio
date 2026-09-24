import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://satyamkumar.dev"),
  title: {
    default: "Satyam Kumar — Developer & Freelance Web Developer",
    template: "%s | Satyam Kumar",
  },
  description:
    "Satyam Kumar is a Computer Science Engineering student and software developer building modern websites, web applications and practical digital products with AI-assisted workflows.",
  keywords: [
    "Satyam Kumar",
    "web developer",
    "freelance developer",
    "Next.js developer",
    "React developer",
    "portfolio",
    "CSE student",
    "India developer",
    "full stack developer",
    "web applications",
  ],
  authors: [{ name: "Satyam Kumar" }],
  creator: "Satyam Kumar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://satyamkumar.dev",
    title: "Satyam Kumar — Developer & Freelance Web Developer",
    description:
      "Building modern websites, web applications and practical digital products.",
    siteName: "Satyam Kumar",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Satyam Kumar — Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Satyam Kumar — Developer & Freelance Web Developer",
    description:
      "Building modern websites, web applications and practical digital products.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
