import type { Metadata } from "next";
import { Crimson_Text, Inter } from "next/font/google";
import "./globals.css";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oathbound: The Ten Trials",
  description:
    "A medieval fantasy 2D action-platformer. Five heroes. Ten trials. One vampire lord. Save the Squire. Defeat Lord Malakor.",
  keywords: ["game", "platformer", "RPG", "fantasy", "medieval", "indie game"],
  authors: [{ name: "Adhirath" }, { name: "Avantika" }, { name: "Sheeenz" }],
  openGraph: {
    title: "Oathbound: The Ten Trials",
    description:
      "A medieval fantasy 2D action-platformer hybrid. Five heroes bound by oath must conquer ten trials to save their kidnapped Squire from Lord Malakor, the Vampire Lord.",
    type: "website",
    url: "https://oathbound-game.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oathbound: The Ten Trials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oathbound: The Ten Trials",
    description:
      "A medieval fantasy 2D action-platformer. Five heroes. Ten trials. One vampire lord.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${crimsonText.variable} ${inter.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
