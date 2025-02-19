'use client';

import AaveByNumbers from "@/components/AaveByNumbers/AaveByNumbers";
import AaveEverywhere from "@/components/AaveEverywhere/AaveEverywhere";
import DefiUnlocked from "@/components/DefiUnlocked/DefiUnlocked";
import FAQ from "@/components/Faq/FAQ";
import Footer from "@/components/Footer/Footer";
import GHO from "@/components/GHO/GHO";
import Governed from "@/components/Governed/Governed";
import HeroSection from "@/components/HeroSection/HeroSection";
import MeetAave from "@/components/MeetAave/MeetAave";
import Navbar from "@/components/Navbar/Navbar";
import Security from "@/components/Security/Security";
import Trusted from "@/components/Trusted/Trusted";

export default function Home() {
  return (
      <div className="">
        <Navbar />
        <HeroSection />
        <MeetAave />
        <AaveByNumbers />
        <DefiUnlocked />
        <GHO />
        <AaveEverywhere />
        <Trusted />
        <Governed />
        <Security />
        <FAQ />
        <Footer />
      </div>
  )
}