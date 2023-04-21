import Gridbox from "../Gridbox/Gridbox";
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  YAxis,
  XAxis,
  Tooltip,
  ReferenceLine,
  Area,
} from "recharts";

const Gridrow1 = () => {
  return (
    <>
      <Gridbox gridArea="a" borderRadius=".4rem">
        <ResponsiveContainer width={700} height="80%">
          <AreaChart
            // data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
            <ReferenceLine
              y={4000}
              label="Max"
              stroke="red"
              strokeDasharray="3 3"
            />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Gridbox>
      <Gridbox gridArea="b" borderRadius=".4rem"></Gridbox>
      <Gridbox gridArea="c" borderRadius=".4rem"></Gridbox>
    </>
  );
};

export default Gridrow1;
