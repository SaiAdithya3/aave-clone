'use client';

import AaveByNumbers from "@/components/AaveByNumbers/AaveByNumbers";
import DefiUnlocked from "@/components/DefiUnlocked/DefiUnlocked";
import HeroSection from "@/components/HeroSection/HeroSection";
import MeetAave from "@/components/MeetAave/MeetAave";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
      <div className="">
        <Navbar />
        <HeroSection />
        <MeetAave />
        <AaveByNumbers />
        <DefiUnlocked />
        <div className="mt-48 p-60">bankai</div>
      </div>
  )
}