import React, { Suspense } from "react";
import type { Metadata } from "next";
import "./globals.css";
import "../assets/css/styles.min.css";
import "../assets/css/custom.css";
import { PortfolioProvider } from "../context/PortfolioContext";
import Preloader from "../components/Preloader";
import Banner from "../components/Banner";
import RightDemo from "../components/RightDemo";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Borhan Uddin - WapBorhan Code & Portfolio",
  description:
    "Personal GitHub Portfolio of Borhan Uddin (WapBorhan). Repositories, Starred Projects, Followers, and Following.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="template-color-1 home-sticky spybody white-version">
        <Suspense fallback={null}>
          <PortfolioProvider>
            <Preloader />
            <Banner />
            <main>{children}</main>
            <RightDemo />
            <Footer />
          </PortfolioProvider>
        </Suspense>
      </body>
    </html>
  );
}
