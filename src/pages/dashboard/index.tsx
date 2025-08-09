import { memo, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { LINKS } from "../../static";
// import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
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
          {LINKS.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.index ? "" : link.path}
                className={({ isActive }) =>
                  `text-[18px] py-1 px-2 rounded-[6px] flex flex-col ${
                    isActive ? "bg-white text-green-600" : ""
                  }`
                }
              >
                <div
                  className="flex items-center gap-1"
                  onClick={() =>
                    setShowSubCategories((p) => (p ? null : index + 1))
                  }
                >
                  {toCapitalize(link.path)}
                </div>
              </NavLink>
              {link.children && showSubCategories === index + 1 && (
                <ul className="text-[18px] py-1 px-2 rounded-[6px] p-2">
                  {link.children?.map((ch, i) => (
                    <li key={i}>
                      <Link to={ch.path}>{ch.name}</Link>
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
