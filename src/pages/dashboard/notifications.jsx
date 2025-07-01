
import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export function Notifications() {
  const [showAlerts, setShowAlerts] = React.useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });
  const [showAlertsWithIcon, setShowAlertsWithIcon] = React.useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });
  const alerts = ["gray", "green", "orange", "red"];
  return (
    <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8">
      <Card>
        <CardHeader className="p-6">
          <h6 className="text-lg font-semibold text-gray-800">Alerts</h6>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 p-6">
          {alerts.map((color) => (
            <div
              key={color}
              className={`border-l-4 p-4 ${
                color === "gray" ? "border-gray-500 bg-gray-50" :
                color === "green" ? "border-green-500 bg-green-50" :
                color === "orange" ? "border-orange-500 bg-orange-50" :
                "border-red-500 bg-red-50"
              }`}
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <InformationCircleIcon className={`h-5 w-5 ${
                    color === "gray" ? "text-gray-400" :
                    color === "green" ? "text-green-400" :
                    color === "orange" ? "text-orange-400" :
                    "text-red-400"
                  }`} />
                </div>
                <div className="ml-3">
                  <p className={`text-sm ${
                    color === "gray" ? "text-gray-700" :
                    color === "green" ? "text-green-700" :
                    color === "orange" ? "text-orange-700" :
                    "text-red-700"
                  }`}>
                    A simple {color} alert with{" "}
                    <a href="#" className="font-medium underline hover:no-underline">
                      an example link
                    </a>
                    . Give it a click if you like.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="p-6">
          <h6 className="text-lg font-semibold text-gray-800">Alerts with Icon</h6>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 p-6">
          {alerts.map((color) => (
            <div
              key={color}
              className={`rounded-md p-4 ${
                color === "gray" ? "bg-gray-50 border border-gray-200" :
                color === "green" ? "bg-green-50 border border-green-200" :
                color === "orange" ? "bg-orange-50 border border-orange-200" :
                "bg-red-50 border border-red-200"
              }`}
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <InformationCircleIcon className={`h-5 w-5 ${
                    color === "gray" ? "text-gray-400" :
                    color === "green" ? "text-green-400" :
                    color === "orange" ? "text-orange-400" :
                    "text-red-400"
                  }`} />
                </div>
                <div className="ml-3">
                  <h3 className={`text-sm font-medium ${
                    color === "gray" ? "text-gray-800" :
                    color === "green" ? "text-green-800" :
                    color === "orange" ? "text-orange-800" :
                    "text-red-800"
                  }`}>
                    {color.charAt(0).toUpperCase() + color.slice(1)} Alert
                  </h3>
                  <div className={`mt-2 text-sm ${
                    color === "gray" ? "text-gray-700" :
                    color === "green" ? "text-green-700" :
                    color === "orange" ? "text-orange-700" :
                    "text-red-700"
                  }`}>
                    <p>
                      A simple {color} alert with{" "}
                      <a href="#" className="font-medium underline hover:no-underline">
                        an example link
                      </a>
                      . Give it a click if you like.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default Notifications;
