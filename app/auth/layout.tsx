export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#07121C] min-h-screen overflow-y-auto">
        {children}
      </body>
    </html>
  );
}