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
  isFetching: boolean;
};

export const PopulationTrendChart = ({
  prefList,
  populationData,
  isFetching,
}: PopulationTrendChartProps) => {
  const [selectedPopulationLabel, setSelectedPopulationLabel] = useState("総人口");
  const { formattedData, keys } = formatData(populationData, selectedPopulationLabel);

  return (
    <section>
      {((formattedData && formattedData.length > 0) || isFetching) && (
        <div className="card">
          {!isFetching ? (
            <>
              <h2>都道府県別人口推移</h2>
              <PopulationSwitchRadio
                selectedPopulationLabel={selectedPopulationLabel}
                setSelectedPopulationLabel={setSelectedPopulationLabel}
              />
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
                    <YAxis label={{ value: "人口数", position: "top", offset: 10 }} />
                    <Tooltip />
                    <Legend
                      layout="horizontal"
                      verticalAlign="top"
                      align="right"
                      wrapperStyle={{
                        top: 10,
                      }}
                    />
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
            </>
          ) : (
            <p>データを取得中です...</p>
          )}
        </div>
      )}
    </section>
  );
};
