import { Header } from "@/features/components/Header";
import { PopulationTrendChart } from "@/features/components/PopulationTrendChart/PopulationTrendChart";
import { PrefectureCheckBoxGrid } from "@/features/components/PrefectureCheckBoxes/PrefectureCheckBoxGrid";
import { trpc } from "@/utils/trpc";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedPrefectures, setSelectedPrefectures] = useState<string[]>([]);

  const { data: prefList } = trpc.getPrefectureList.useQuery();

  const { data: populationData } = trpc.getPopulation.useQuery({
    prefCodes: selectedPrefectures,
  });

  return (
    <div className="wrapper">
      <Header />
      <PrefectureCheckBoxGrid
        prefList={prefList}
        prefectures={selectedPrefectures}
        setPrefectures={setSelectedPrefectures}
      />
      <PopulationTrendChart prefList={prefList} populationData={populationData} />
    </div>
  );
}
