import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
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
  title: "Cart | GMC",
  description: "Carrito ",
};

export default function CartLayout({ children }) {
  return (
    <>
      <Header></Header>

        {children}
    </>
  );
}
