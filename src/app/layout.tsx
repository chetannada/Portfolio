import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/fonts";
import { ThemeProvider } from "@/views/context/ThemeContext";
import Header from "@/views/components/Header";
import { Toaster } from "react-hot-toast";
import ContentWrapper from "@/views/components/ContentWrapper";
import Footer from "@/views/components/Footer";

const BASE_URL = "https://chetannada.netlify.app";

export const metadata: Metadata = {
  title: "Chetan Nada | Full-Stack Web Developer Portfolio",
  description:
    "Chetan Nada's personal portfolio website showcasing projects, skills, and experience in modern web development using Next.js, TypeScript, and React.",
  keywords: [
    "Chetan Nada",
    "Portfolio",
    "Web Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Frontend Developer",
    "Full-Stack Developer",
  ],
  authors: [
    { name: "Chetan Nada", url: "https://www.linkedin.com/in/chetannada/" },
  ],
  generator: "Next.js",

  // --- Canonical URL and Robots ---
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL,
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

  // --- Additional Headers/Tags  ---
  other: {
    referrer: "no-referrer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className={`min-h-screen bg-body text-text ${poppins.className}`}>
        <ThemeProvider>
          <Header />

          <ContentWrapper>{children}</ContentWrapper>

          <Footer />

          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
