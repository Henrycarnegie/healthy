import HeroSection from "@/components/layout/HeroSection";
import Hotline from "@/components/layout/Hotline";
import MotivationSection from "@/components/layout/MotivationSection";
import Navbar from "@/components/layout/Navbar";
import SelfcareSection from "@/components/layout/SelfcareSection";
import SupportSection from "@/components/layout/SupportSection";
import TopicSection from "@/components/layout/TopicSection";

const page = () => {
   return (
      <>
         <Navbar />
         <Hotline />
         <HeroSection />
         <TopicSection />
         <SelfcareSection />
         <MotivationSection />
         <SupportSection />
      </>
   );
};
   
export default page;
