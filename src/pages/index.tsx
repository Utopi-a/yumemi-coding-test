import { Header } from "@/features/components/Header";
import { PopulationTrendChart } from "@/features/components/PopulationTrendChart/PopulationTrendChart";
import { PrefectureCheckBoxGrid } from "@/features/components/PrefectureCheckBoxes/PrefectureCheckBoxGrid";
import { trpc } from "@/utils/trpc";
import { Kosugi_Maru } from "next/font/google";
import { useState } from "react";

const kosugi = Kosugi_Maru({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  const [selectedPrefectures, setSelectedPrefectures] = useState<string[]>([]);

  const { data: prefList, isFetching: isFetchingPrefList } = trpc.getPrefectureList.useQuery();

  const { data: populationData, isLoading: isFetchingPopulationData } = trpc.getPopulation.useQuery(
    {
      prefCodes: selectedPrefectures,
    },
  );

  return (
    <div className={`wrapper ${kosugi.className}`}>
      <Header />
      <PrefectureCheckBoxGrid
        prefList={prefList}
        prefectures={selectedPrefectures}
        setPrefectures={setSelectedPrefectures}
        isFetching={isFetchingPrefList}
      />
      <PopulationTrendChart
        prefList={prefList}
        populationData={populationData}
        isFetching={isFetchingPopulationData}
      />
    </div>
  );
}
