import type { Metadata } from "next";
import "./globals.css";
import CustomProvider from './../lib/Provider';

export const metadata: Metadata = {
  title: "Next Search App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CustomProvider>
      {" "}
      <html lang="en">
        <body className={``}>{children}</body>
      </html>
    </CustomProvider>
  );
}
