"use client";

import topics from "@/utils/DataTopics";
import Link from "next/link";
import { motion } from "motion/react";

const TopicSection = () => {
   const colorClasses = {
      sage: "bg-emerald-100 text-emerald-600",
      lavender: "bg-violet-100 text-violet-600",
      coral: "bg-rose-100 text-rose-600",
   };

   return (
      <section className="relative bg-linear-to-b from-stone-50 to-stone-100 py-16 md:py-20 lg:h-screen lg:sticky lg:top-0">
         <div className="container mx-auto px-4 sm:px-6">
            {/* Section Header */}
            <div className="mb-10 md:mb-14 text-center">
               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-3 md:mb-4">
                  What Would You Like to Learn About?
               </h2>
               <p className="text-base sm:text-lg text-stone-600 max-w-xl md:max-w-2xl mx-auto">
                  Everyone&apos;s journey is unique. Explore topics that
                  resonate with you at your own pace.
               </p>
            </div>

            {/* Topics Grid */}
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
               {topics.map((topic) => (
                  <Link key={topic.title} href="/learn" className="group">
                     <motion.div
                        className="h-full rounded-2xl bg-white p-5 sm:p-6 border border-stone-200 shadow-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onHoverStart={() => console.log("hover started!")}
                     >
                        {/* Icon */}
                        <div
                           className={`mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl transition-colors duration-300 ${colorClasses[topic.color as keyof typeof colorClasses]}`}
                        >
                           <topic.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                        </div>

                        <h3 className="mb-2 text-lg sm:text-xl font-semibold text-stone-800 transition-colors group-hover:text-emerald-600">
                           {topic.title}
                        </h3>

                        <p className="text-sm leading-relaxed text-stone-600">
                           {topic.description}
                        </p>
                     </motion.div>
                  </Link>
               ))}
            </div>
         </div>
      </section>
   );
};

export default TopicSection;
