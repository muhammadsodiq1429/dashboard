import { memo } from "react";
import { NavLink, Outlet } from "react-router";
import { ACCESSORIES_LINK } from "../../../static";
import { toCapitalize } from "../../../helper/toCapitalize";

const Accessories = () => {
  return (
    <div className="Accessories">
      <ul className="flex gap-4">
        {ACCESSORIES_LINK.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              end
              className={({ isActive }) =>
                `py-1 px-2 ${isActive ? "bg-green-200" : ""} `
              }
            >
              {toCapitalize(link.path)}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default memo(Accessories);
