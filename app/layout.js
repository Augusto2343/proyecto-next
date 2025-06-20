import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import  AuthContextProvider from "./context/AuthContext";
import  CartContextProvider  from "./context/CartContext"
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home | GMC ",
  description: "Página oficial de concesionarias GMC Capitán. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthContextProvider>
        <CartContextProvider>
        {children}
      </CartContextProvider>
      </AuthContextProvider>
      <Script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></Script>

      </body>
    </html>
  );
}
