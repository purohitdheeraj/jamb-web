import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";


const copernicusRegular = localFont({
  src: "./fonts/copernicus-regular.woff2",
  variable: "--font-copernicus-regular",
  weight: "100 900",
});

const copernicusCondensed = localFont({
  src: "./fonts/copernicus-condensed.woff2",
  variable: "--font-copernicus-condensed",
  weight: "100 900",
});



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${copernicusRegular.variable} ${copernicusCondensed.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
