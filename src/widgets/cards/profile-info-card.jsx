import PropTypes from "prop-types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function ProfileInfoCard({ title, description, details, action }) {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-0">
        <div className="flex items-center justify-between">
          <div>
            <h6 className="text-blue-gray-900 text-lg font-semibold mb-1">
              {title}
            </h6>
            <p className="text-blue-gray-500 text-sm font-normal">
              {description}
            </p>
          </div>
          {action}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        {details && (
          <div className="mt-6">
            {Object.keys(details).map((el, key) => (
              <div key={key} className="flex items-center py-1.5">
                <p className="text-blue-gray-500 text-sm font-normal antialiased">
                  {el}:
                </p>
                <p className="ml-auto text-blue-gray-900 text-sm font-semibold antialiased">
                  {details[el]}
                </p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

ProfileInfoCard.defaultProps = {
  action: null,
  description: null,
  details: null,
};

ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.node,
  details: PropTypes.object,
  action: PropTypes.node,
};

ProfileInfoCard.displayName = "/src/widgets/cards/profile-info-card.jsx";

export default ProfileInfoCard;