import type { Metadata } from "next";
import "../globals.css";
import 'react-loading-skeleton/dist/skeleton.css'

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
  viewport: "width=device-width, initial-scale=1.0"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
