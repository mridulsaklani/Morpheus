import Banner from "@/components/layout/Banner";
import BannerBottom from "@/components/layout/BannerBottom";
import GameSlider from "@/components/layout/GameSlider";
import LiveTournaments from "@/components/layout/LiveTournaments";
import ScoreBoard from "@/components/layout/ScoreBoard";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner/>
      <GameSlider/>
      <BannerBottom/>
      <LiveTournaments/>
       <ScoreBoard/>
    </>
   
  );
}
