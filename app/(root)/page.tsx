import HeroSection from "@/components/layout/HeroSection";
import Hotline from "@/components/layout/Hotline";
import MotivationSection from "@/components/layout/MotivationSection";
import UserNavbar from "@/components/layout/UserNavbar";
import SelfcareSection from "@/components/layout/SelfcareSection";
import SupportSection from "@/components/layout/SupportSection";
import TopicSection from "@/components/layout/TopicSection";

const page = () => {
   return (
      <>
         <UserNavbar />
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
