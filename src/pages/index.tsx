import { Header } from "@/features/components/Header";
import { PrefectureCheckBoxGrid } from "@/features/components/PrefectureCheckBoxes/PrefectureCheckBoxGrid";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <PrefectureCheckBoxGrid />
    </div>
  );
}
