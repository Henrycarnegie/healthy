import Image from "next/image";
import React from "react";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <Image
          src="/hero-background.jpg"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-linear-to-b from-stone-50/70 via-white/60 to-stone-50/80" />
      </div>

      <main className="relative min-h-screen scroll-smooth">
        {children}
      </main>
    </>
  );
};

export default LandingPageLayout;
