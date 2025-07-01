import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "@/data";

export function Profile() {
  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-gray-100">
        <CardContent className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <Avatar className="relative h-[74px] w-[74px] border-2 border-white">
                <AvatarImage src="/img/bruce-mars.jpeg" alt="bruce-mars" />
                <AvatarFallback>BM</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Richard Davis</h4>
                <p className="text-gray-600">CEO / Co-Founder</p>
              </div>
            </div>
            <div className="w-96">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Link className="font-normal" to="#pablo">
                    <HomeIcon className="h-4 w-4" />
                    App
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Link className="font-normal" to="#pablo">
                    <ChatBubbleLeftEllipsisIcon className="h-4 w-4" />
                    Message
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Link className="font-normal" to="#pablo">
                    <Cog6ToothIcon className="h-4 w-4" />
                    Settings
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            <div>
              <h6 className="mb-3 text-lg font-semibold text-gray-800">Platform Settings</h6>
              <div className="flex flex-col gap-12">
                {platformSettingsData.map(({ title, options }) => (
                  <div key={title}>
                    <h6 className="mb-2 block antialiased text-sm font-medium text-gray-800">
                      {title}
                    </h6>
                    <div className="flex flex-col gap-2">
                      {options.map(({ checked, label }) => (
                        <div key={label} className="flex items-center">
                          <input
                            id={label}
                            type="checkbox"
                            defaultChecked={checked}
                            className="h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor={label} className="ml-2 text-sm text-gray-800">
                            {label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <ProfileInfoCard
              title="Profile Information"
              description="Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
              details={{
                "first name": "Alec M. Thompson",
                mobile: "(44) 123 1234 123",
                email: "alecthompson@mail.com",
                location: "USA",
                social: (
                  <div className="flex items-center gap-4">
                    <i className="fa-brands fa-facebook text-blue-700" />
                    <i className="fa-brands fa-twitter text-blue-400" />
                    <i className="fa-brands fa-instagram text-purple-500" />
                  </div>
                ),
              }}
              action={
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <PencilIcon className="h-4 w-4" />
                  Edit
                </Button>
              }
            />
            <div>
              <h6 className="mb-3 text-lg font-semibold text-gray-800">Conversations</h6>
              <div className="flex flex-col gap-6">
                {conversationsData.map((props) => (
                  <MessageCard key={props.name} {...props} />
                ))}
              </div>
            </div>
          </div>
          <div className="px-4 pb-4">
            <h6 className="mb-6 text-lg font-semibold text-gray-800">Projects</h6>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {projectsData.map(({ img, title, description, tag, route, members }) => (
                <Card key={title} className="border border-gray-100">
                  <CardHeader className="p-0">
                    <Link to={route}>
                      <img
                        src={img}
                        alt={title}
                        className="h-40 w-full rounded-lg object-cover"
                      />
                    </Link>
                  </CardHeader>
                  <CardContent className="p-6">
                    <span className="inline-block bg-blue-500 text-white px-2 py-1 text-xs rounded mb-4">
                      {tag}
                    </span>
                    <Link to={route}>
                      <h5 className="mb-2 text-lg font-semibold text-gray-800 hover:text-gray-600">
                        {title}
                      </h5>
                    </Link>
                    <p className="mb-6 font-normal text-gray-600">
                      {description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm">
                        View Project
                      </Button>
                      <div className="flex items-center">
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
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default Profile;