
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar({ brandName, routes, action }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon, href, target }) => (
        <li key={name} className="flex items-center p-1 font-normal">
          {href ? (
            <a
              href={href}
              target={target}
              className="flex items-center"
            >
              {icon &&
                React.createElement(icon, {
                  className: "mr-1 h-[18px] w-[18px] opacity-75",
                })}
              {name}
            </a>
          ) : (
            <Link to={path} className="flex items-center">
              {icon &&
                React.createElement(icon, {
                  className: "mr-1 h-[18px] w-[18px] opacity-75",
                })}
              {name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 backdrop-blur-2xl backdrop-saturate-200 bg-white/80 border border-white/80 text-gray-700">
      <div className="flex items-center justify-between">
        <Link to="/" className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
          {brandName}
        </Link>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            {React.cloneElement(action, {
              className: "hidden lg:inline-block",
            })}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </Button>
        </div>
      </div>
      <div className={`${openNav ? "block" : "hidden"} lg:hidden`}>
        {navList}
        {React.cloneElement(action, {
          className: "w-full block",
        })}
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  brandName: "Material Tailwind React",
  action: (
    <a
      href="https://www.creative-tim.com/product/material-tailwind-dashboard-react"
      target="_blank"
      rel="noreferrer"
    >
      <Button variant="outline" size="sm" className="hidden lg:inline-block">
        Free Download
      </Button>
    </a>
  ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
