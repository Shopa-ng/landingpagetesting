import { Toaster } from "@/components/ui/sonner";
import { satoshi } from "@/fonts/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopa",
  description: "Buy, Sell, Connect",
};

import { SmoothScroll } from "@/components/smooth-scroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.className} antialiased`}>
        <SmoothScroll>{children}</SmoothScroll>
        <Toaster richColors position="top-right" duration={2000} />
      </body>
    </html>
  );
}
