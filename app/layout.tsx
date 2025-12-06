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
  icons: {
    icon: [
      { url: "/icons.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/x-icon" },
    ],
  },
  openGraph: {
    title: "RentalCar",
    description: "Car rental across Ukraine at great prices.",
    url: "https://rentalcar.com",
    images: [
      {
        url: "/background-logo.png",
        width: 1200,
        height: 630,
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
          <div className="page-wrapper">
            <Header />
            {children}
          </div>
        </TanStackProvider>

      </body>
    </html>
  );
}
