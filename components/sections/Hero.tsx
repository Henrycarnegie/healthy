"use client";

import { BrainIcon } from "lucide-react";
import Badge from "../ui/badge";
import { motion } from "motion/react";

const HeroSection = () => {
   return (
      <section className="h-screen sticky top-0 -mt-20 min-h-[90vh] flex items-center justify-center">
         <motion.div
            className="mx-auto max-w-4xl px-6 text-center flex flex-col justify-center items-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 2 } }}
         >
            <Badge
               icon={<BrainIcon className="h-4 w-4" />}
               label="Mental Health Matters"
            />

            <h1 className="text-5xl font-bold leading-tight text-stone-900">
               You&apos;re Not Alone on This <br />
               <span className="text-emerald-700">Journey</span>
            </h1>

            <p className="text-lg text-stone-600">
               Remember, seeking help is a sign of strength. Your well-being
               matters, and there are people ready to support you every step of
               the way.
            </p>

            <a
               href="/ai-chat"
               className="rounded-full bg-emerald-100 border border-emerald-700 text-emerald-800 px-7 py-3 text-sm font-medium hover:bg-emerald-300 transition"
            >
               Talk with AI
            </a>
         </motion.div>
      </section>
   );
};

export default HeroSection;
