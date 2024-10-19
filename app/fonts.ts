import { Arimo, Knewave } from "next/font/google";
import localFont from "next/font/local";

export const arimo = Arimo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-arimo",
});

export const kneWave = Knewave({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-knewave",
});

export const boorsok = localFont({
  src: "./fonts/boorsok.ttf",
  variable: "--font-boorsok",
});

export const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
