import { PopulationProcedureOutput, PrefApiResponse } from "@/types";

export const formatData = (populationData: PopulationProcedureOutput | undefined) => {
  const filteredData = populationData?.map((data) => {
    return {
      ...data,
      population: data.population
        .filter((data) => data.label === "総人口")[0]
        .data.filter((data) => data.year <= 2020),
    };
  });

  const formattedData: Record<string, number>[] = [];

  filteredData?.forEach((pref) => {
    pref.population.forEach((pop) => {
      let existingEntry = formattedData.find((entry) => entry.year === pop.year);

      if (!existingEntry) {
        existingEntry = { year: pop.year };
        formattedData.push(existingEntry);
      }

      existingEntry[`${pref.prefCode}`] = pop.value;
    });
  });

  const keys =
    formattedData.length > 0 ? Object.keys(formattedData[0]).filter((key) => key !== "year") : [];

  return { formattedData, keys };
};

export const generateColor = (index: number, total: number) => {
  const hue = Math.floor((index / total) * 360);
  return `hsl(${hue}, 70%, 50%)`;
};

export const getPrefName = (prefList: PrefApiResponse | undefined, prefCode: string) => {
  const prefecture = prefList?.find((pref) => pref.prefCode === Number(prefCode));
  return prefecture ? prefecture.prefName : null;
};
