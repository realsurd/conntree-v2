export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#07121C] flex items-center justify-center min-h-screen">
        {children}
      </body>
    </html>
  );
}
