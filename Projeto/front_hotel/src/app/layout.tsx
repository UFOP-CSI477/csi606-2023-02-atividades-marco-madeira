import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/network/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free Place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <div className="flex w-screen h-screen">
            {children}
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
