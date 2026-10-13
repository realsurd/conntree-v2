export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // The root layout (app/layout.tsx) already renders <html> and <body>.
  // A nested layout must not render them again.
  return <div className="bg-[#07121C] min-h-screen">{children}</div>;
}
