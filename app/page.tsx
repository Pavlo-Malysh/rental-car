import Hero from "@/components/Hero/Hero";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Home page RentalCar",
  description: "Car rental across Ukraine at great prices. Fast online booking, reliable partners, and convenient pick-up options. Travel comfortably with RentalCar",
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

export default function Home() {
  return (
    <main>
      <section>
        <Hero />
      </section>

    </main>
  );
}
