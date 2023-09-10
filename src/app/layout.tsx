import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/components/common/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vege Art",
  description: "Vegenerator and other tools",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />

          <main className="flex grow items-center justify-center px-10 py-5">
            <div className="w-full max-w-5xl">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
