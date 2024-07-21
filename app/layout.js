import { Inter } from "next/font/google";
import Header from "../components/Header"
import Footer from "../components/Footer"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AccelHERate",
  description: "Your go to ticket into the tech world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
          <Header/>
          {children}
          <Footer />
      </body>
    </html>
  );
}
