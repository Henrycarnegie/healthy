"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
   navItems?: { label: string; href: string }[];
}

const defaultNavItems = [
   { label: "Home", href: "/" },
   { label: "Consult", href: "/consult" },
   { label: "Learn", href: "/education" },
   { label: "Self-care", href: "/self-care" },
   { label: "About", href: "/about" },
];

export default function Navbar({ navItems = defaultNavItems }: NavbarProps) {
   const [expanded, setExpanded] = useState(false);

   return (
      <header
         className="sticky top-6 z-50 "
         onMouseEnter={() => setExpanded(true)}
         onMouseLeave={() => setExpanded(false)}
      >
         <div
            className={`mx-10 my-4 rounded-xl border border-gray-300 bg-gray-100 shadow-sm flex items-center justify-between px-6 py-4 gap-6 transition-all duration-500 ease-out ${expanded ? "max-w-full" : "max-w-22.5"}`}
         >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
               <Image
                  src="/favicon.ico"
                  alt="Healthy Mind Logo"
                  width={40}
                  height={40}
                  priority
               />
               <span
                  className={`text-lg font-semibold transition-all duration-300 ${expanded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"}`}
               >
                  Healthy
               </span>
            </Link>

            {/* Nav */}
            <nav
               className={`flex items-center gap-6 transition-all duration-300 ${expanded ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
               {navItems.map((item) => (
                  <Link
                     key={item.label}
                     href={item.href}
                     className="relative text-sm font-medium transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-amber-600/60 after:transition-all hover:text-amber-600/60 hover:after:w-full"
                  >
                     {item.label}
                  </Link>
               ))}
            </nav>
         </div>
      </header>
   );
}
