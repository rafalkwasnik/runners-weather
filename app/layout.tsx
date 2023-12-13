import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Runners - Weather App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-mono p-8 sm:p-24">{children}</body>
    </html>
  );
}
