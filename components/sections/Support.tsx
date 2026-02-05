const SupportSection = () => {
   return (
      <section className="h-screen sticky top-0 py-24 bg-emerald-100 flex items-center justify-center">
         <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl font-semibold text-emerald-900">
               You Deserve Support
            </h2>
            <p className="mt-4 text-emerald-800">
               Small steps today can lead to meaningful change tomorrow.
            </p>

            <div className="mt-10 flex justify-center gap-4">
               <a
                  href="/self-care"
                  className="rounded-full bg-emerald-700 px-7 py-3 text-sm font-medium text-white hover:bg-emerald-700/90 transition"
               >
                  Start Self-Care
               </a>
               <a
                  href="/consult"
                  className="rounded-full border border-emerald-700 text-emerald-800 px-7 py-3 text-sm font-medium hover:bg-emerald-300  transition"
               >
                  Talk to Someone
               </a>
            </div>
         </div>
      </section>
   );
};

export default SupportSection;
