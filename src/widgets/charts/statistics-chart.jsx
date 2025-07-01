
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Chart from "react-apexcharts";
import PropTypes from "prop-types";

export function StatisticsChart({ color, chart, title, description, footer }) {
  return (
    <Card className="border border-gray-100">
      <CardHeader className="mx-4 mt-4 flex items-center justify-between">
        <div>
          <h6 className="mb-1 text-lg font-semibold text-gray-800">{title}</h6>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </CardHeader>
      <CardContent className="mt-4 grid place-items-center px-2">
        <Chart {...chart} />
      </CardContent>
      {footer && (
        <div className="border-t border-gray-50 px-6 py-5">
          {footer}
        </div>
      )}
    </Card>
  );
}

StatisticsChart.defaultProps = {
  color: "blue",
  footer: null,
};

StatisticsChart.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  chart: PropTypes.object.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

StatisticsChart.displayName = "/src/widgets/charts/statistics-chart.jsx";

export default StatisticsChart;
