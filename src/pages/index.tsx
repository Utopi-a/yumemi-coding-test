import { Header } from "@/features/components/Header";
import { PopulationTrendChart } from "@/features/components/PopulationTrendChart/PopulationTrendChart";
import { PrefectureCheckBoxGrid } from "@/features/components/PrefectureCheckBoxes/PrefectureCheckBoxGrid";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <PrefectureCheckBoxGrid />
      <PopulationTrendChart />
    </div>
  );
}
