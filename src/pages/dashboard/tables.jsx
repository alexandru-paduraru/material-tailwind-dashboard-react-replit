import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";

export function Tables() {
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader className="bg-gray-800 text-white mb-8 p-6">
          <h6 className="text-lg font-semibold">
            Authors Table
          </h6>
        </CardHeader>
        <CardContent className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["author", "function", "status", "employed", ""].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <span className="text-[11px] font-bold uppercase text-gray-400">
                      {el}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {authorsTableData.map(
                ({ img, name, email, job, online, date }, key) => {
                  const className = `py-3 px-5 ${
                    key === authorsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar className="h-8 w-8 rounded">
                            <AvatarImage src={img} alt={name} />
                            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-semibold text-gray-800">
                              {name}
                            </p>
                            <p className="text-xs font-normal text-gray-500">
                              {email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <p className="text-xs font-semibold text-gray-600">
                          {job[0]}
                        </p>
                        <p className="text-xs font-normal text-gray-500">
                          {job[1]}
                        </p>
                      </td>
                      <td className={className}>
                        <Badge 
                          variant={online ? "default" : "secondary"}
                          className={`py-0.5 px-2 text-[11px] font-medium w-fit ${online ? "bg-green-500" : "bg-gray-500"}`}
                        >
                          {online ? "online" : "offline"}
                        </Badge>
                      </td>
                      <td className={className}>
                        <p className="text-xs font-semibold text-gray-600">
                          {date}
                        </p>
                      </td>
                      <td className={className}>
                        <a
                          href="#"
                          className="text-xs font-semibold text-gray-600 hover:text-gray-800"
                        >
                          Edit
                        </a>
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
        <CardHeader className="bg-gray-800 text-white mb-8 p-6">
          <h6 className="text-lg font-semibold">
            Projects Table
          </h6>
        </CardHeader>
        <CardContent className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["companies", "members", "budget", "completion", ""].map(
                  (el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
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
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={img} alt={name} />
                            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <p className="text-sm font-bold text-gray-800">
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
                      <td className={className}>
                        <a
                          href="#"
                          className="text-xs font-semibold text-gray-600"
                        >
                          <EllipsisVerticalIcon
                            strokeWidth={2}
                            className="h-5 w-5 text-inherit"
                          />
                        </a>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}

export default Tables;
