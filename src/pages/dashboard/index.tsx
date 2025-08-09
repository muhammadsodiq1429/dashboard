import { memo, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { LINKS } from "../../static";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { toCapitalize } from "../../helper/toCapitalize";

const Dashboard = () => {
  const [showSubCategories, setShowSubCategories] = useState<number | null>(
    null
  );
  return (
    <div className="dashboard flex">
      <div className="dashboard__sidebar w-[300px] text-white bg-green-600 h-screen p-4 sticky top-0 left-0 overflow-auto">
        <h2 className="text-3xl mb-8">Dashboard</h2>
        <ul className="dashboard__sidebar__collection flex flex-col gap-2">
          {LINKS.map((link) => (
            <li
              key={link.id}
              className={`text-[18px] ${
                location.pathname.includes("/" + link.path)
                  ? "bg-white text-green-600 rounded-[6px]"
                  : ""
              }`}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `py-1 px-2 flex flex-col rounded-[6px]${
                    isActive ? "bg-white text-green-600" : ""
                  }`
                }
                onClick={() =>
                  setShowSubCategories((p) => (p ? null : link.id))
                }
              >
                <div className="flex items-center gap-1">
                  {toCapitalize(link.path)}
                  {(() => {
                    if (link.children?.length) {
                      if (showSubCategories === link.id) {
                        return <FaAngleUp />;
                      } else {
                        return <FaAngleDown />;
                      }
                    } else {
                      return "";
                    }
                  })()}
                </div>
              </NavLink>
              {link.children && showSubCategories === link.id && (
                <ul className="px-2 pb-2">
                  {link.children?.map((ch, i) => (
                    <li key={i}>
                      <NavLink
                        end
                        to={link.path + "/" + ch.path}
                        className={({ isActive }) =>
                          `py-1 px-2 rounded-[6px] ${
                            isActive ? "bg-green-300" : ""
                          }`
                        }
                      >
                        {ch.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="dashboard__main flex-1">
        <div className="dashboard__main__header h-20 bg-green-600 w-full sticky top-0 left-0"></div>
        <div className="dashboard__main__content p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default memo(Dashboard);
