import { Metadata } from "next";

const title: string = "الواقعه، ثبت‌نام در سامانه";
const description: string = "ساخت حساب کاربری، در الواقعه";
export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
  },
  twitter: {
    title: title,
    description: description,
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
