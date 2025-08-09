import { memo } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { LINKS } from "../../../../static";

const Literature = () => {
  return (
    <div className="Literature">
      <ul className="flex gap-3">
        {LINKS.filter((link) => link.path === "books")[0]
          ?.children?.filter((link) => link.path === "literature")[0]
          ?.children?.map((link) => (
            <li key={link.id}>
              <NavLink
                end
                to={link.path}
                className={({ isActive }) =>
                  `py-1 px-2 ${isActive ? "bg-green-300" : ""}`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
      </ul>
      <div className="p-2">
        <Outlet />
      </div>
    </div>
  );
};

export default memo(Literature);
