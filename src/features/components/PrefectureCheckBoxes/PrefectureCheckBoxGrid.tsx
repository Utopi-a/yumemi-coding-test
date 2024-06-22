import { PrefApiResponse } from "@/types";
import { PrefectureCheckBox } from "./PrefectureCheckBox";

type PrefectureCheckBoxGridProps = {
  prefList: PrefApiResponse | undefined;
  prefectures: string[];
  setPrefectures: React.Dispatch<React.SetStateAction<string[]>>;
};

export const PrefectureCheckBoxGrid = ({
  prefList,
  prefectures,
  setPrefectures,
}: PrefectureCheckBoxGridProps) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    setPrefectures((prevSelectedPrefectures) => {
      if (checked) {
        return [...prevSelectedPrefectures, value];
      } else {
        return prevSelectedPrefectures.filter((prefecture) => prefecture !== value);
      }
    });
  };

  return (
    <section>
      <h2>人口推移を取得したい都道府県を選択してください</h2>
      <div className="gridPrefCheckbox">
        {prefList?.map((pref) => {
          return (
            <PrefectureCheckBox
              prefName={pref.prefName}
              prefCode={String(pref.prefCode)}
              onChange={handleCheckboxChange}
              key={pref.prefCode}
            />
          );
        })}
      </div>
    </section>
  );
};
