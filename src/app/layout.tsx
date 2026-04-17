import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Get Known For What You Do Best",
  description: "Effortless thought leadership. Claim your expertise.",
  openGraph: {
    type: "website",
    title: "Get Known For What You Do Best",
    description: "Effortless thought leadership. Claim your expertise.",
    url: "https://getknownfor.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Known For What You Do Best",
    description: "Effortless thought leadership. Claim your expertise.",
  },
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
