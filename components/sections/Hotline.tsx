"use client";

import { PhoneCall } from "lucide-react";
import { useState } from "react";

const Hotline = () => {
   const [expanded, setExpanded] = useState(false);

   return (
      <button
         aria-label="Get immediate mental health support"
         className={`
        fixed bottom-8 right-8 z-50
        flex items-center gap-3
        rounded-full bg-emerald-600 px-4 py-3
        text-white shadow-lg
        transition-all duration-300 ease-out
        hover:bg-emerald-700
        focus:outline-none focus:ring-4 focus:ring-emerald-300
        ${expanded ? "pr-6" : ""}
      `}
         onMouseEnter={() => setExpanded(true)}
         onMouseLeave={() => setExpanded(false)}
         onFocus={() => setExpanded(true)}
         onBlur={() => setExpanded(false)}
      >
         <PhoneCall className="h-5 w-5 shrink-0" />

         <span
            className={`
          text-sm font-medium whitespace-nowrap
          transition-all duration-300
          ${expanded ? "opacity-100 max-w-xs" : "opacity-0 max-w-0 overflow-hidden"}
        `}
         >
            Talk to Someone Now
         </span>
      </button>
   );
};

export default Hotline;
