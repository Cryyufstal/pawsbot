// app/layout.tsx

/**
 * This project was developed by Nikandr Surkov.
 * 
 * YouTube: https://www.youtube.com/@NikandrSurkov
 * GitHub: https://github.com/nikandr-surkov
 */

import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// تحميل الخطوط المحلية
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// تحميل الخطوط من Google
const inter = Inter({ subsets: ["latin"] });

// إعداد البيانات الوصفية (Metadata)
export const metadata: Metadata = {
  title: "Telegram Mini App",
  description: "A simple Telegram Mini App using Next.js 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* إضافة سكربت تيليجرام لتطبيق Web App */}
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
