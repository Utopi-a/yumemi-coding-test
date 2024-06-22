import { PrefApiResponse } from "@/types";
import { PrefectureCheckBox } from "./PrefectureCheckBox";
import { ResetPrefecture } from "./ResetPrefecture";

type PrefectureCheckBoxGridProps = {
  prefList: PrefApiResponse | undefined;
  prefectures: string[];
  setPrefectures: React.Dispatch<React.SetStateAction<string[]>>;
  isFetching: boolean;
};

export const PrefectureCheckBoxGrid = ({
  prefList,
  prefectures,
  setPrefectures,
  isFetching,
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
      <div className="card">
        {prefList ? (
          <>
            <h2>人口推移を取得したい都道府県を選択してください</h2>
            <div className="gridPrefCheckbox">
              {prefList.map((pref) => {
                return (
                  <PrefectureCheckBox
                    prefName={pref.prefName}
                    prefCode={String(pref.prefCode)}
                    onChange={handleCheckboxChange}
                    key={pref.prefCode}
                    checked={prefectures.includes(String(pref.prefCode))}
                  />
                );
              })}
            </div>
            <ResetPrefecture setPrefectures={setPrefectures} />
          </>
        ) : isFetching ? (
          <p>データを取得中です...</p>
        ) : (
          <p>
            データの取得に失敗しました。
            <br />
            時間を置いて再度お試しください。
          </p>
        )}
      </div>
    </section>
  );
};
