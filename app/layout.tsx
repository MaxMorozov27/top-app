import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin","cyrillic"],
});

export const metadata: Metadata = {
  title: "Top-app",
  description: "Top-app application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
