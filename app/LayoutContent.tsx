"use client";

import { usePathname } from "next/navigation";
import Navigation from "@/components/craig/Navigation";
import Footer from "@/components/craig/Footer";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return <>{children}</>;
  }

  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
