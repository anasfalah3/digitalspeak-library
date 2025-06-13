import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./timeline.css";
import { ShiftingDropDown } from "./components/NavBar";
import toast, { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next"
const title = "DigitalSpeak - Library";
const description = "DigitalSpeak - Library of CSS and JavaScript snippets";
const keywords = ["DigitalSpeak - Library", "DigitalSpeak - Library of CSS and JavaScript snippets", "DigitalSpeak", "Library", "CSS", "JavaScript", "Snippets"];
export const metadata: Metadata = {
  title,
  description,
  authors: [
    {
      name: "Get Funnels",
      url: "https://getfunnels.agency",
    },
  ],
  keywords,

  openGraph: {
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    site: "@getfunnels",
    title,
    description,
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="forest">
      <body className={inter.className}>
        <Toaster />
        <ShiftingDropDown />
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
