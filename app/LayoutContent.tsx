"use client";

import Navigation from "@/components/craig/Navigation";
import Footer from "@/components/craig/Footer";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
