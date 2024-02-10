import type { Metadata } from "next";
import localfont from "next/font/local";
import { Dosis, Roboto } from "next/font/google";
import "./globals.css";
const more = localfont ({
  src:[{
    path:"../public/font/More-sugar.regular.ttf",
    weight:"1",
    
  }],
  variable: "--font-more",
 
})
export const metadata: Metadata = {
  title: "Ebasa",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={more.className}>{children}</body>  
    </html>
  );
}

