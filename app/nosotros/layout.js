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
  title: "Nosotros | GMC",
  description: "Página nosotros de concesionarias GMC Capitán.  ",
};

export default function NosotrosLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
