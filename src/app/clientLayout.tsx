export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div dir="rtl">
      {children}
    </div>
  );
}
