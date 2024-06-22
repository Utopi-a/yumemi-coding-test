import { PopulationProcedureOutput } from "@/types";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type PopulationTrendChartProps = {
  populationData: PopulationProcedureOutput | undefined;
};

export const PopulationTrendChart = ({ populationData }: PopulationTrendChartProps) => {
  const filteredData = populationData?.map((data) => {
    return {
      ...data,
      population: data.population
        .filter((data) => data.label === "総人口")[0]
        .data.filter((data) => data.year <= 2020),
    };
  });

  const formatData = (data: typeof filteredData) => {
    const result: Record<string, number>[] = [];

    data?.forEach((pref) => {
      pref.population.forEach((pop) => {
        let existingEntry = result.find((entry) => entry.year === pop.year);

        if (!existingEntry) {
          existingEntry = { year: pop.year };
          result.push(existingEntry);
        }

        existingEntry[`${pref.prefCode}`] = pop.value;
      });
    });

    return result;
  };

  const formattedData = formatData(filteredData);

  const keys =
    formattedData.length > 0 ? Object.keys(formattedData[0]).filter((key) => key !== "year") : [];

  const generateColor = (index: number, total: number) => {
    const hue = Math.floor((index / total) * 360);
    return `hsl(${hue}, 70%, 50%)`;
  };

  return (
    <section>
      {filteredData && filteredData.length > 0 && (
        <div className="chart">
          <ResponsiveContainer>
            <LineChart
              data={formattedData}
              margin={{
                top: 30,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="year"
                label={{ value: "年度（西暦）", position: "insideBottomRight", offset: -10 }}
              />
              <YAxis label={{ value: "人口数", position: "top", offset: 15 }} />
              <Tooltip />
              <Legend layout="horizontal" verticalAlign="top" align="right" />
              {keys.map((key, index) => (
                <Line
                  type="monotone"
                  dataKey={key}
                  name={`PrefCode ${key}`}
                  key={key}
                  stroke={generateColor(index, keys.length)}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </section>
  );
};
