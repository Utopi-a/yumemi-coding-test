import { Header } from "@/features/components/Header";
import { PopulationTrendChart } from "@/features/components/PopulationTrendChart/PopulationTrendChart";
import { PrefectureCheckBoxGrid } from "@/features/components/PrefectureCheckBoxes/PrefectureCheckBoxGrid";
import { trpc } from "@/utils/trpc";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const hello = trpc.getPrefectureList.useQuery();

  console.log(hello.data);

  return (
    <div className="wrapper">
      <Header />
      <PrefectureCheckBoxGrid />
      <PopulationTrendChart />
    </div>
  );
}
