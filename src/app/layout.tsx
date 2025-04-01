import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TRPCReactProvider } from "@/trpc/react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "Home | Grevego",
  description:
    "Grevego is an innovative platform dedicated to promoting sustainable and healthy living by integrating technology with eco-friendly practices. It offers a sustainable marketplace that connects consumers with fresh, local produce, aiming to minimize environmental impact. The platform ensures maximum freshness and reduces food waste through temperature-controlled last-mile delivery. Additionally, Grevego provides personalized nutrition suggestions powered by artificial intelligence to enhance health outcomes. Beyond these services, Grevego is committed to reducing food waste, supporting local farmers, and implementing clean energy solutions, thereby contributing to a healthier planet.",
  icons: [{ rel: "icon", url: "/logo.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} overflow-x-hidden`}>
      <body className="overflow-x-hidden">
        <TRPCReactProvider>
          <Header />
          {children}
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
