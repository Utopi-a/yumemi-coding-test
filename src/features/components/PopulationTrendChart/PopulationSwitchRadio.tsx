import { SetStateAction } from "react";

type PopulationSwitchRadioProps = {
  setSelectedPopulationLabel: React.Dispatch<SetStateAction<string>>;
};

export const PopulationSwitchRadio = ({
  setSelectedPopulationLabel,
}: PopulationSwitchRadioProps) => {
  return (
    <div className="populationSelector">
      <input
        type="radio"
        id="populationType1"
        name="population"
        value="総人口"
        onClick={(e) => setSelectedPopulationLabel(e.currentTarget.value)}
      />
      <label htmlFor="populationType1">総人口</label>
      <input
        type="radio"
        id="populationType2"
        name="population"
        value="年少人口"
        onClick={(e) => setSelectedPopulationLabel(e.currentTarget.value)}
      />
      <label htmlFor="populationType2">年少人口</label>
      <input
        type="radio"
        id="populationType3"
        name="population"
        value="生産年齢人口"
        onClick={(e) => setSelectedPopulationLabel(e.currentTarget.value)}
      />
      <label htmlFor="populationType3">生産年齢人口</label>
      <input
        type="radio"
        id="populationType4"
        name="population"
        value="老年人口"
        onClick={(e) => setSelectedPopulationLabel(e.currentTarget.value)}
      />
      <label htmlFor="populationType4">老年人口</label>
    </div>
  );
};
