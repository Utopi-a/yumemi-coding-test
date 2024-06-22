type PrefectureCheckBoxProps = {
  prefName: string;
  prefCode: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
};

export const PrefectureCheckBox = ({
  prefName,
  prefCode,
  onChange,
  checked,
}: PrefectureCheckBoxProps) => {
  return (
    <label className="prefCheckbox">
      <input
        type="checkbox"
        name="prefectures"
        value={prefCode}
        onChange={onChange}
        checked={checked}
      />
      <p>{prefName}</p>
    </label>
  );
};
