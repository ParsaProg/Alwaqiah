import type { Metadata } from "next";
import "./main.css";
import ClientLayout from "./clientLayout";
import FavIcon from "./favicon.ico"
import Header from "@/components/ui/header/Header";
import Footer from "@/components/main/footer/Footer";

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',           // a string path is fine
    apple: '/apple-touch-icon.png', // optional
  },
  title: "الواقعه، دینی و قرانی",
  description: "پروژه‌‌ی الوالقعه، دینی، مذهبی و قرانی برای ایرانیان",
  openGraph: {
    title: "الواقعه، دینی و قرانی",
    description: "پروژه‌‌ی الوالقعه، دینی، مذهبی و قرانی برای ایرانیان",
  },
  twitter: {
    card: "summary_large_image",
    title: "الواقعه، دینی و قرانی",
    description: "پروژه‌‌ی الوالقعه، دینی، مذهبی و قرانی برای ایرانیان",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <link rel="icon" href={FavIcon.src} />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <body className="iransans">
        <Header />
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
