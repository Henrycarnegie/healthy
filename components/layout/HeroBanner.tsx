import { BrainIcon } from "lucide-react";
import Badge from "../ui/badge";

const HeroBanner = () => {
   return (
      <section className="h-screen sticky min-h-[85vh] flex items-center justify-center">
         <div className="mx-auto max-w-4xl px-6 text-center">
            <Badge
               icon={<BrainIcon className="h-4 w-4" />}
               label="Mental Health Matters"
            />

            <h1 className="mt-6 text-5xl font-bold leading-tight text-stone-900">
               You&apos;re Not Alone on This <br />
               <span className="text-emerald-700">Journey</span>
            </h1>

            <p className="mt-6 text-lg text-stone-600">
               Remember, seeking help is a sign of strength. Your well-being
               matters, and there are people ready to support you every step of
               the way.
            </p>
         </div>
      </section>
   );
};

export default HeroBanner;
