type ResetPrefectureProps = {
  setPrefectures: React.Dispatch<React.SetStateAction<string[]>>;
};

export const ResetPrefecture = ({ setPrefectures }: ResetPrefectureProps) => {
  return (
    <button onClick={() => setPrefectures([])} className="resetButton">
      リセットする
    </button>
  );
};
