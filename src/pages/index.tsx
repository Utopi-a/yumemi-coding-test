import { Header } from "@/features/components/Header";
import { PopulationTrendChart } from "@/features/components/PopulationTrendChart/PopulationTrendChart";
import { PrefectureCheckBoxGrid } from "@/features/components/PrefectureCheckBoxes/PrefectureCheckBoxGrid";
import { trpc } from "@/utils/trpc";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data } = trpc.getPrefectureList.useQuery();

  const [selectedPrefectures, setSelectedPrefectures] = useState<string[]>([]);

  console.log(data);

  return (
    <div className="wrapper">
      <Header />
      <PrefectureCheckBoxGrid
        prefList={data}
        prefectures={selectedPrefectures}
        setPrefectures={setSelectedPrefectures}
      />
      <PopulationTrendChart />
    </div>
  );
}
