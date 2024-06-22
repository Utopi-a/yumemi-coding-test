import { PopulationProcedureOutput, PrefApiResponse } from "@/types";
import { useState } from "react";
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
import { PopulationSwitchRadio } from "./PopulationSwitchRadio";
import { formatData, generateColor, getPrefName } from "./utils";

type PopulationTrendChartProps = {
  prefList: PrefApiResponse | undefined;
  populationData: PopulationProcedureOutput | undefined;
};

export const PopulationTrendChart = ({ prefList, populationData }: PopulationTrendChartProps) => {
  const [selectedPopulationLabel, setSelectedPopulationLabel] = useState("総人口");
  const { formattedData, keys } = formatData(populationData, selectedPopulationLabel);

  return (
    <section>
      {formattedData && formattedData.length > 0 && (
        <div className="card">
          <h2>都道府県別人口推移</h2>
          <PopulationSwitchRadio setSelectedPopulationLabel={setSelectedPopulationLabel} />
          <div className="chart">
            <ResponsiveContainer>
              <LineChart
                data={formattedData}
                margin={{
                  top: 30,
                  right: 40,
                  left: 40,
                  bottom: 20,
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
                    name={getPrefName(prefList, key) ?? key}
                    key={key}
                    stroke={generateColor(index, keys.length)}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </section>
  );
};
