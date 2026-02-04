import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "باغ آینده - Bagh-e Ayandeh | Future Garden",
  description: "A vision of hope for a free Iran",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link 
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" 
          rel="stylesheet" 
          type="text/css" 
        />
      </head>
      <body className={`${inter.className} font-farsi bg-gradient-to-br from-persian-green-50 via-persian-turquoise-50 to-persian-gold-50`}>
        {children}
      </body>
    </html>
  );
}
