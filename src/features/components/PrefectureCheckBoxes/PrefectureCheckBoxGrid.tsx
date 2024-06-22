import { useState } from "react";
import { PrefectureCheckBox } from "./PrefectureCheckBox";

export const PrefectureCheckBoxGrid = () => {
  const [prefectures, setPrefectures] = useState<string[]>([]);

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
        <PrefectureCheckBox prefName="北海道" prefCode="1" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="青森県" prefCode="2" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="岩手県" prefCode="3" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="宮城県" prefCode="4" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="秋田県" prefCode="5" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="山形県" prefCode="6" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="福島県" prefCode="7" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="茨城県" prefCode="8" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="栃木県" prefCode="9" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="群馬県" prefCode="10" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="埼玉県" prefCode="11" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="千葉県" prefCode="12" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="東京都" prefCode="13" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="神奈川県" prefCode="14" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="新潟県" prefCode="15" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="富山県" prefCode="16" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="石川県" prefCode="17" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="福井県" prefCode="18" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="山梨県" prefCode="19" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="長野県" prefCode="20" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="岐阜県" prefCode="21" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="静岡県" prefCode="22" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="愛知県" prefCode="23" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="三重県" prefCode="24" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="滋賀県" prefCode="25" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="京都府" prefCode="26" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="大阪府" prefCode="27" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="兵庫県" prefCode="28" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="奈良県" prefCode="29" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="和歌山県" prefCode="30" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="鳥取県" prefCode="31" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="島根県" prefCode="32" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="岡山県" prefCode="33" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="広島県" prefCode="34" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="山口県" prefCode="35" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="徳島県" prefCode="36" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="香川県" prefCode="37" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="愛媛県" prefCode="38" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="高知県" prefCode="39" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="福岡県" prefCode="40" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="佐賀県" prefCode="41" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="長崎県" prefCode="42" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="熊本県" prefCode="43" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="大分県" prefCode="44" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="宮崎県" prefCode="45" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="鹿児島県" prefCode="46" onChange={handleCheckboxChange} />
        <PrefectureCheckBox prefName="沖縄県" prefCode="47" onChange={handleCheckboxChange} />
      </div>
    </section>
  );
};
