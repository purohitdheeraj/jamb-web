import type { Metadata } from "next";
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

const copernicusBold = localFont({
  src: "./fonts/copernicus-semibold.woff2",
  variable: "--font-copernicus-semibold",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Antique Items | Jamb",
  description: "Discover a curated collection of antique fireplaces and lighting fixtures that bring timeless elegance and charm to any space.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${copernicusRegular.variable} ${copernicusBold.variable} ${copernicusCondensed.variable} antialiased container min-h-screen copernicus-regular`}
      >
        {children}
      </body>
    </html>
  );
}
