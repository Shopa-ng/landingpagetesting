import type { Metadata } from "next";
import "./globals.css";
import { satoshi } from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "Shopa",
  description: "Buy, Sell, Connect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.className} antialiased`}>{children}</body>
    </html>
  );
}
