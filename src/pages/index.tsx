import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";
import { LINKS } from "../static";
const Dashboard = lazy(() => import("./dashboard"));

const Pages = () => {
  return (
    <div>
      {useRoutes([
        {
          path: "/",
          element: <Dashboard />,
          children: LINKS.map((link) => ({
            path: link.path,
            element: link.element,
            children: link.children?.map((childLink) => ({
              path: childLink.path,
              element: childLink.element,
              children: link.children?.map((childLink2) => {
                {
                  console.log(childLink2);
                  return { path: childLink2.path, element: childLink2.element };
                }
              }),
            })),
          })),
        },
      ])}
    </div>
  );
};

export default memo(Pages);
