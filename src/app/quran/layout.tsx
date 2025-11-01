import { Metadata } from "next";
import { ReactNode } from "react";

const metadata: Metadata = {
  title: "",
  description: "",
  openGraph: {
    title: "",
    description: "",
  },
  twitter: {
    title: "",
    description: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
