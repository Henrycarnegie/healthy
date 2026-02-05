"use client";

import Hotline from "@/components/sections/Hotline";
import MotivationSection from "@/components/sections/Motivation";
import UserNavbar from "@/components/sections/UserNavbar";
import SelfcareSection from "@/components/sections/Selfcare";
import SupportSection from "@/components/sections/Support";
import TopicSection from "@/components/sections/Topic";
import HeroSection from "@/components/sections/Hero";

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
