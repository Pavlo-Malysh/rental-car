import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Manrope } from 'next/font/google';
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
});


export const metadata: Metadata = {
  title: "RentalCar",
  description: "Car rental across Ukraine at great prices. Fast online booking, reliable partners, and convenient pick-up options. Travel comfortably with RentalCar",
  openGraph: {
    title: "RentalCar",
    description: "Car rental across Ukraine at great prices.",
    url: "https://rentalcar.com",
    images: [
      {
        url: "https://www.volynnews.com/files/news/2023/12-12/373638/photo_2023-12-12_10-04-28.jpg",
        width: 1374,
        height: 916,
        alt: "RentalCar logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        <TanStackProvider>
          <Header />
          {children}
        </TanStackProvider>

      </body>
    </html>
  );
}
