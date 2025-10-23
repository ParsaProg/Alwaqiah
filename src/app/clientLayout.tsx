export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div dir="rtl">
      <div className="mt-[101px]"></div>
      {children}
    </div>
  );
}
