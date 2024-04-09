import { PieChart } from "@mui/x-charts/PieChart";

const Chart = ({ data }) => {
  return (
    <PieChart
      series={[
        {
          paddingAngle: 0,
          innerRadius: 80,
          outerRadius: 100,
          data,
        },
      ]}
      margin={{ right: 5 }}
      width={200}
      height={200}
    />
  );
};
export default Chart;
