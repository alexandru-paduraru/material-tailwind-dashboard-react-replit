import { useLocation, Link } from "react-router-dom";
import { useMaterialTailwindController, setOpenConfigurator, setOpenSidenav } from "@/context";
import { Button } from "@/components/ui/button";
import { 
  Bars3Icon,
  UserCircleIcon,
  Cog6ToothIcon,
  BellIcon,
} from "@heroicons/react/24/solid";

export function DashboardNavbar() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");

  return (
    <nav
      className={`${
        fixedNavbar ? "sticky top-4 z-40" : "relative"
      } flex w-full rounded-xl bg-white/75 backdrop-blur-2xl backdrop-saturate-200 px-0 py-1 shadow-md shadow-blue-gray-500/5 transition-all border`}
    >
      <div className="flex w-full flex-col items-center justify-between gap-6 px-4 py-2 md:flex-row md:px-8">
        <div className="capitalize">
          <nav aria-label="breadcrumb" className="w-max">
            <ol className="flex items-center space-x-2">
              <li className="cursor-pointer text-blue-gray-500 hover:text-blue-500">
                <Link to={`/${layout}`}>
                  <p className="text-sm font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100">
                    {layout}
                  </p>
                </Link>
              </li>
              <span className="text-gray-500 mx-2">/</span>
              <li className="text-blue-gray-900">
                <p className="text-sm font-normal">
                  {page}
                </p>
              </li>
            </ol>
          </nav>
          <h6 className="text-blue-gray-900 text-lg font-semibold capitalize">
            {page}
          </h6>
        </div>
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="grid xl:hidden"
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
          </Button>
          <Link to="/dashboard/profile">
            <Button
              variant="ghost"
              size="icon"
              className="text-blue-gray-500"
            >
              <UserCircleIcon className="h-5 w-5" />
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpenConfigurator(dispatch, true)}
            className="text-blue-gray-500"
          >
            <Cog6ToothIcon className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-blue-gray-500"
          >
            <BellIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;