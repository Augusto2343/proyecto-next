import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Checkout | GMC",
  description: "Catalogo de vehiculos",
};

export default function CheckoutLayout({ children }) {
  return (
      <>
      <Header></Header>
        {children}
      </>

  );
}
