import PropTypes from "prop-types";
import { Card, CardContent } from "@/components/ui/card";

export function StatisticsCard({ color, icon, title, value, footer }) {
  return (
    <Card className="border shadow-sm">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-normal text-blue-gray-600 antialiased">
              {title}
            </p>
            <h4 className="text-2xl font-semibold text-blue-gray-900 antialiased">
              {value}
            </h4>
          </div>
          <div className={`bg-gradient-to-tr ${color} grid h-12 w-12 place-items-center rounded-lg text-white shadow-lg shadow-blue-gray-500/40`}>
            {icon}
          </div>
        </div>
        {footer && (
          <div className="border-t border-blue-gray-50 p-4">
            {footer}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

StatisticsCard.defaultProps = {
  color: "from-blue-600 to-blue-400",
  footer: null,
};

StatisticsCard.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

StatisticsCard.displayName = "/src/widgets/cards/statistics-card.jsx";

export default StatisticsCard;