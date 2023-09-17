import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Provider } from "@/utils/provider";

import { Header } from "@/components/common/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vege Art",
  description: "Vege tools and more",
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

          <Provider>
            <main className="flex grow items-center justify-center px-10 py-5">
              <div className="w-full max-w-5xl">{children}</div>
            </main>
          </Provider>
        </div>

        <Analytics />
      </body>
    </html>
  );
}
