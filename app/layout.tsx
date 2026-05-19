import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PointPression V2",
  description:
    "Antisèche professionnelle statique pour acupression, MTC, protocoles, syndromes et méridiens.",
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
