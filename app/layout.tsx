import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "next-themes";


export const metadata: Metadata = {
  title: "Booking App",
  description: "Find your perfect stay easily and fast",
};
const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="bg-neutral-50 text-black selection:bg-pink-200 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
       <main>
        <ThemeProvider attribute="class" defaultTheme="system">{children}</ThemeProvider>
        </main>
      </body>
    </html>
  )
}