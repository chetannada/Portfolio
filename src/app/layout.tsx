import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Chetan Nada's personal portfolio website showcasing projects, skills, and experience in web development.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-body-light dark:bg-body-dark text-text-light dark:text-text-dark">
        {children}

        <Toaster
          position="top-center"
          toastOptions={{
            success: { style: { background: "green", color: "white" } },
            error: { style: { background: "red", color: "white" } },
            duration: 3000,
          }}
        />
      </body>
    </html>
  );
}
