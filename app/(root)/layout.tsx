import Navbar from "@/components/shared/Navbar";
import { Suspense } from "react";
import Loading from "../loading";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex h-screen flex-col">
        <Navbar/>
        <Suspense fallback={<Loading/>}>
        <main className="flex-1">{children}</main>
        </Suspense>
      </div>
    );
  }