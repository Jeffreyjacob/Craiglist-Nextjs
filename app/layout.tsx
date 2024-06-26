import type { Metadata } from "next";
import "./globals.css";
import  {ClerkProvider} from '@clerk/nextjs'
import { Poppins } from "next/font/google";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const poppins = Poppins({ subsets: ["latin"],
  weight:['400','500','600','700'],
  variable:'--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
