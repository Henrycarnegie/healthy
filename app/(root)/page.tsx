import HeroBanner from "@/components/layout/HeroBanner";
import Navbar from "@/components/layout/Navbar";
import TopicSection from "@/components/layout/TopicSection";
import practices from "@/utils/DataPractice";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const page = () => {
   return (
      <>
         <Navbar />
         <HeroBanner />
         <TopicSection />
         <section className="min-h-[85vh] h-screen sticky top-0 py-20 bg-amber-100">
            <div className="container mx-auto px-4">
               <div className="grid items-center gap-12 lg:grid-cols-2">
                  {/* Left Content */}
                  <div>
                     <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-emerald-600">
                        Self-Care Toolkit
                     </span>

                     <h2 className="mb-6 text-3xl font-bold text-stone-900 md:text-4xl">
                        Small Steps, Big Impact
                     </h2>

                     <p className="mb-8 text-lg leading-relaxed text-stone-600">
                        You don&apos;t need grand gestures to take care of
                        yourself. These simple, evidence-based practices can
                        help you feel more grounded, calm, and connected to
                        yourself.
                     </p>

                     <Link
                        href="/self-care"
                        className="inline-flex items-center gap-2 rounded-full
                     bg-emerald-600 px-6 py-3 text-sm font-medium text-white
                     transition hover:bg-emerald-700"
                     >
                        Explore All Resources
                        <ArrowRight className="h-5 w-5" />
                     </Link>
                  </div>

                  {/* Right Cards */}
                  <div className="space-y-4">
                     {practices.map((practice, index) => (
                        <div
                           key={practice.title}
                           className="flex items-start gap-5 rounded-2xl bg-white p-6 border border-stone-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                           style={{ animationDelay: `${index * 0.1}s` }}
                        >
                           <div
                              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${practice.bgColor}`}
                           >
                              <practice.icon
                                 className={`h-6 w-6 ${practice.iconColor}`}
                              />
                           </div>

                           <div>
                              <h3 className="mb-1 text-lg font-semibold text-stone-800">
                                 {practice.title}
                              </h3>
                              <p className="text-sm leading-relaxed text-stone-600">
                                 {practice.description}
                              </p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         <section className="h-screen sticky top-0 py-28 bg-emerald-100">
            <div className="mx-auto max-w-3xl px-6 text-center">
               <p className="text-2xl font-light text-stone-700 leading-relaxed">
                  Healing isn’t linear. Take your time —
                  <br className="hidden sm:block" />
                  and be kind to yourself.
               </p>
            </div>
         </section>
         <section className="h-screen sticky top-0 py-24 bg-stone-900 text-stone-50">
            <div className="mx-auto max-w-4xl px-6 text-center">
               <h2 className="text-3xl font-semibold">You Deserve Support</h2>
               <p className="mt-4 text-stone-300">
                  Small steps today can lead to meaningful change tomorrow.
               </p>

               <div className="mt-10 flex justify-center gap-4">
                  <a
                     href="/self-care"
                     className="rounded-full bg-emerald-600 px-7 py-3 text-sm font-medium
                   text-white hover:bg-emerald-700 transition"
                  >
                     Start Self-Care
                  </a>
                  <a
                     href="/consult"
                     className="rounded-full border border-stone-600 px-7 py-3 text-sm font-medium
                   text-stone-200 hover:bg-stone-800 transition"
                  >
                     Talk to Someone
                  </a>
               </div>
            </div>
         </section>
      </>
   );
};

export default page;
