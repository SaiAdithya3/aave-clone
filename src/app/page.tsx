'use client';

import HeroSection from "@/components/HeroSection/HeroSection";
import MeetAave from "@/components/MeetAave/MeetAave";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
      <div className="">
        <Navbar />
        <HeroSection />
        <MeetAave />
      </div>
  )
}