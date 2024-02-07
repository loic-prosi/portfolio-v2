import type { Metadata } from "next";
import { work_sans } from "@/app/fonts";
import "@/app/globals.css";

import { Navbar } from "@/app/ui/Navbar";
import { Footer } from "@/app/ui/Footer";

export const metadata: Metadata = {
  title: "Loïc Prosi - Développeur web",
  description: "Portfolio regroupant mes principaux projets."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${work_sans.className} flex h-screen flex-col antialiased dark:bg-black dark:invert`}
      >
        <Navbar
          heading="Loïc Prosi"
          links={[
            { name: "Accueil", url: "/" },
            { name: "Projets", url: "/" }
          ]}
        />
        {children}
        <Footer
          text="Loïc Prosi - 2024"
          link={{
            name: "Code source",
            url: "https://github.com/loic-prosi/portfolio-v2"
          }}
        />
      </body>
    </html>
  );
}
