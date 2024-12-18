import type { Metadata } from "next";
import "./globals.css";
import {
  arimo,
  boorsok,
  chillax,
  lilita,
  geistMono,
  geistSans,
  kneWave,
} from "./fonts";

export const metadata: Metadata = {
  title: "FDV",
  description: "FDV website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${lilita.variable} ${chillax.variable} ${geistMono.variable} ${boorsok.variable} ${arimo.variable} ${kneWave.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
