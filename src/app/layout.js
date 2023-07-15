import Schema from "./Schema";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Watch OTT Party",
  description:
    "Watch ottparty for virtual movie nights with friends. Create special memories with long-distance loved ones and your own watching room.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
      </head>
      <body className={inter.className}>
        <Schema />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
