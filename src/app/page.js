import Banner from "@/components/layout/Banner";
import BannerBottom from "@/components/layout/BannerBottom";
import Counter from "@/components/layout/Counter";
import GameSlider from "@/components/layout/GameSlider";
import LiveTournaments from "@/components/layout/LiveTournaments";
import RecentWinners from "@/components/layout/RecentWinners";
import ScoreBoard from "@/components/layout/ScoreBoard";
import Win from "@/components/layout/Win";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner/>
      <GameSlider/>
      <BannerBottom/>
      <LiveTournaments/>
       <RecentWinners pb={24} pt={0}/>
       <ScoreBoard/>
       <Counter/>
       <Win/>
       
    </>
   
  );
}
