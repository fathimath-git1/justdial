import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Justdial - India's No.1 Local Search Engine",
  description:
    "Find businesses, services, restaurants, doctors, hotels and more near you. Search across 6.2 Crore+ products & services on Justdial.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
