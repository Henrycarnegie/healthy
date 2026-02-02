"use client";

import React from "react";
// import { motion, useReducedMotion } from "motion/react";
import { motion } from "framer-motion";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <>
         {/* Animated Background */}
         <motion.div
            aria-hidden
            className="fixed inset-0 -z-10 overflow-hidden bg-stone-50"
         >
            <motion.div
               className="absolute -top-32 -left-32 w-125 h-125 rounded-full bg-emerald-200 blur-3xl"
               animate={{ x: [0, 200, 100, 300, 0],
  y: [0, 150, 300, 100, 0],  }}
               transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
               className="absolute top-1/2 right-0 w-100 h-100 rounded-full bg-sky-200 blur-3xl"
               animate={{ x: [0, -200, 0], y: [0, -150, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}

            />
         </motion.div>

         {/* Page Content */}
         <main className="relative min-h-screen">{children}</main>
      </>
   );
};

export default LandingPageLayout;
