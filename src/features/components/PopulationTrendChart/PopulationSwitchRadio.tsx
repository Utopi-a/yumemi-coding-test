type PopulationSwitchRadioProps = {
  setSelectedPopulationLabel: React.Dispatch<React.SetStateAction<string>>;
};

export const PopulationSwitchRadio = ({
  setSelectedPopulationLabel,
}: PopulationSwitchRadioProps) => {
  const populationType = ["総人口", "年少人口", "生産年齢人口", "老年人口"];

  return (
    <div className="populationSelector">
      {populationType.map((type, index) => {
        return (
          <div className="radioItem" key={index}>
            <input
              type="radio"
              id={`populationType${index}`}
              name="population"
              value={type}
              onClick={(e) => setSelectedPopulationLabel(e.currentTarget.value)}
            />
            <label htmlFor={`populationType${index}`}>{type}</label>
          </div>
        );
      })}
    </div>
  );
};
