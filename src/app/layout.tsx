import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nathan Chung",
  description:
    "Full-stack developer building clean software with intent, from architecture to interface.",
  openGraph: {
    title: "Nathan Chung",
    description:
      "Full-stack developer building clean software with intent, from architecture to interface.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
