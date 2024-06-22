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
import { testPopulationApiData } from "../mockup";

export const PopulationTrendChart = () => {
  const showData = testPopulationApiData.result.data
    .filter((data) => data.label === "総人口")[0]
    .data.filter((data) => data.year <= 2020);

  return (
    <section>
      <div className="chart">
        <ResponsiveContainer>
          <LineChart
            data={showData}
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
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};
