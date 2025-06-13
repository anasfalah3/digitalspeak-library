import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./timeline.css";
import { ShiftingDropDown } from "./components/NavBar";
import toast, { Toaster } from "react-hot-toast";

const title = "DigitalSpeak - Helper";
const description = "DigitalSpeak - Helper";
const keywords = ["DigitalSpeak - Helper", "DigitalSpeak - Helper"];
export const metadata: Metadata = {
  title,
  description,
  authors: [
    {
      name: "Mohamed Ali Naaoui",
      url: "https://twitter.com/Med__Ali_",
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
      </body>
    </html>
  );
}
