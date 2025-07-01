import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { EllipsisVerticalIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import { 
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";

export function Home() {
  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <div className="flex items-center">
                <p className="text-sm text-gray-600">{footer.label}</p>
                <ArrowUpIcon 
                  strokeWidth={2}
                  className={`ml-1 h-4 w-4 ${footer.color === "green" ? "text-green-500" : "text-red-500"}`}
                />
              </div>
            }
          />
        ))}
      </div>
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {statisticsChartsData.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            footer={
              <div className="flex items-center text-sm text-gray-600">
                <ClockIcon strokeWidth={2} className="h-4 w-4 mr-1" />
                {props.footer}
              </div>
            }
          />
        ))}
      </div>
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="overflow-hidden xl:col-span-2">
          <CardHeader 
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <div>
              <h6 className="mb-1 text-lg font-semibold text-gray-800">Projects</h6>
              <p className="text-sm text-gray-600">30 done this month</p>
            </div>
            <Button variant="ghost" size="sm">
              <EllipsisVerticalIcon
                strokeWidth={2}
                className="h-5 w-5 text-gray-600"
              />
            </Button>
          </CardHeader>
          <CardContent className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["companies", "members", "budget", "completion"].map(
                    (el) => (
                      <th
                        key={el}
                        className="border-b border-gray-50 py-3 px-6 text-left"
                      >
                        <span className="text-[11px] font-bold uppercase text-gray-400">
                          {el}
                        </span>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {projectsTableData.map(
                  ({ img, name, members, budget, completion }, key) => {
                    const className = `py-3 px-5 ${
                      key === projectsTableData.length - 1
                        ? ""
                        : "border-b border-gray-50"
                    }`;

                    return (
                      <tr key={name}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <Avatar className="h-9 w-9">
                              <AvatarImage src={img} alt={name} />
                              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <p className="text-sm font-semibold text-gray-800">
                              {name}
                            </p>
                          </div>
                        </td>
                        <td className={className}>
                          {members.map(({ img, name }, key) => (
                            <Avatar
                              key={name}
                              className={`h-6 w-6 cursor-pointer border-2 border-white ${
                                key === 0 ? "" : "-ml-2.5"
                              }`}
                            >
                              <AvatarImage src={img} alt={name} />
                              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          ))}
                        </td>
                        <td className={className}>
                          <p className="text-xs font-medium text-gray-600">
                            {budget}
                          </p>
                        </td>
                        <td className={className}>
                          <div className="w-10/12">
                            <p className="mb-1 block text-xs font-medium text-gray-600">
                              {completion}%
                            </p>
                            <div className="w-full bg-gray-200 rounded-full h-1">
                              <div 
                                className={`h-1 rounded-full ${completion === 100 ? "bg-green-500" : "bg-gray-500"}`}
                                style={{ width: `${completion}%` }}
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader 
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 p-6"
          >
            <h6 className="mb-2 text-lg font-semibold text-gray-800">Orders Overview</h6>
            <p className="flex items-center gap-1 font-normal text-gray-600">
              <ArrowUpIcon
                strokeWidth={2}
                className="h-3.5 w-3.5 text-green-500"
              />
              <strong>24%</strong> this month
            </p>
          </CardHeader>
          <CardContent className="pt-0">
            {ordersOverviewData.map(
              ({ icon, color, title, description }, key) => (
                <div key={title} className="flex items-start gap-4 py-3">
                  <div
                    className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-gray-50 after:content-[''] ${
                      key === ordersOverviewData.length - 1
                        ? "after:h-0"
                        : "after:h-4/6"
                    }`}
                  >
                    {React.createElement(icon, {
                      className: `!w-5 !h-5 ${
                        color === "green" ? "text-green-500" : 
                        color === "orange" ? "text-orange-500" : 
                        color === "red" ? "text-red-500" : "text-gray-500"
                      }`,
                    })}
                  </div>
                  <div>
                    <p className="block antialiased font-sans text-sm leading-normal text-gray-800 font-normal">
                      <strong>{title}</strong>
                    </p>
                    <p className="block antialiased font-sans text-xs font-normal text-gray-600">
                      {description}
                    </p>
                  </div>
                </div>
              )
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Home;