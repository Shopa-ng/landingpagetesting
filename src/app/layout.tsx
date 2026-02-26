import { Toaster } from "@/components/ui/sonner";
import { satoshi } from "@/fonts/fonts";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { SmoothScroll } from "@/components/smooth-scroll";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${satoshi.className} antialiased`}>
        <Providers>
          <SmoothScroll>{children}</SmoothScroll>
          <Toaster richColors position="top-right" duration={2000} />
        </Providers>
      </body>
    </html>
  );
}
