import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const satoshi = localFont({
  variable: "--font-satoshi",
  src: [
    {
      path: "../fonts/Satoshi-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Italic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Satoshi-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-LightItalic.woff",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/Satoshi-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-MediumItalic.woff",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/Satoshi-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-BoldItalic.woff",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/Satoshi-Black.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-BlackItalic.woff",
      weight: "900",
      style: "italic",
    },
  ],
});
