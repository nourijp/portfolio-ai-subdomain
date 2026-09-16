import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hamed Nouri — AI Product & Design Technologist",
  description: "Portfolio for Hamed Nouri: products, prototypes, and workflow systems across AI, automation, UX, local-first tools, multilingual systems, and creative technology. Based in Denton, TX.",
  openGraph: {
    images: [
      {
        url: "https://ai.hamednouri.com/images/home/banner/banner-img.png",
        width: 1200,
        height: 630,
        alt: "Hamed Nouri — AI Product & Design Technologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://ai.hamednouri.com/images/home/banner/banner-img.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolageGrotesque.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
