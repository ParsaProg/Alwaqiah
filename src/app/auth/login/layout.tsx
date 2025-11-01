import { Metadata } from "next";

const title: string = "الواقعه، ورود به سامانه";
const description: string = "ورود به حساب کاربری، نام کاربری و رمز عبور";
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
