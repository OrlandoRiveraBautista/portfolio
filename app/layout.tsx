import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Orlando Rivera-Bautista | Software Engineer & Product Builder",
  description:
    "I design and build scalable software systems that solve real-world problems and create measurable impact. Full-stack engineer with expertise in UI/UX, infrastructure, and product development.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Product Builder",
    "React",
    "Next.js",
    "TypeScript",
    "UI/UX",
    "Web Development",
    "Orlando Rivera-Bautista",
  ],
  authors: [{ name: "Orlando Rivera-Bautista" }],
  creator: "Orlando Rivera-Bautista",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://orlandorivera.dev",
    siteName: "Orlando Rivera-Bautista",
    title: "Orlando Rivera-Bautista | Software Engineer & Product Builder",
    description:
      "I design and build scalable software systems that solve real-world problems and create measurable impact.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Orlando Rivera-Bautista - Software Engineer & Product Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orlando Rivera-Bautista | Software Engineer & Product Builder",
    description:
      "I design and build scalable software systems that solve real-world problems and create measurable impact.",
    images: ["/og-image.png"],
    creator: "@orlandorivera",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
