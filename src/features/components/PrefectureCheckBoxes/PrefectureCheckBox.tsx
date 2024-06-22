type PrefectureCheckBoxProps = {
  prefName: string;
  prefCode: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const PrefectureCheckBox = ({ prefName, prefCode, onChange }: PrefectureCheckBoxProps) => {
  return (
    <label className="prefCheckbox">
      <input type="checkbox" name="prefectures" value={prefCode} onChange={onChange} />
      <p>{prefName}</p>
    </label>
  );
};
