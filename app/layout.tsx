import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PointPression",
  description:
    "MVP statique en français pour découvrir des points d'acupression selon la zone douloureuse.",
  applicationName: "PointPression"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
