import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";

import ForWoman from "./dashboard/accessories/for-woman";
import All from "./dashboard/accessories/all";
import ForMan from "./dashboard/accessories/for-man";
import Literature from "./dashboard/books/literature";
import ScientificAndEducational from "./dashboard/books/scientific-and-educational";
import ChildrenLiterature from "./dashboard/books/children-literature";
const Dashboard = lazy(() => import("./dashboard"));
const Clothes = lazy(() => import("./dashboard/clothes"));
const Accessories = lazy(() => import("./dashboard/accessories"));
const Appliances = lazy(() => import("./dashboard/appliances"));
const AutoProducts = lazy(() => import("./dashboard/auto-products"));
const Books = lazy(() => import("./dashboard/books"));
const Food = lazy(() => import("./dashboard/food"));
const Gadgets = lazy(() => import("./dashboard/gadgets"));
const Health = lazy(() => import("./dashboard/health"));
const Shoes = lazy(() => import("./dashboard/shoes"));
const SportProducts = lazy(() => import("./dashboard/sport-products"));

const Pages = () => {
  return (
    <div>
      {useRoutes([
        {
          path: "/",
          element: <Dashboard />,
          children: [
            {
              path: "",
              element: <Books />,
              children: [
                {
                  path: "literature",
                  element: <Literature />,
                },
                {
                  path: "scientific-and-educational",
                  element: <ScientificAndEducational />,
                },
                {
                  path: "children-literature",
                  element: <ChildrenLiterature />,
                },
              ],
            },
            {
              path: "accessories",
              element: <Accessories />,
              children: [
                {
                  index: true,
                  element: <All />,
                },
                {
                  path: "for-woman",
                  element: <ForWoman />,
                },
                {
                  path: "for-man",
                  element: <ForMan />,
                },
              ],
            },
            {
              path: "appliances",
              element: <Appliances />,
            },
            {
              path: "auto-products",
              element: <AutoProducts />,
            },
            {
              path: "clothes",
              element: <Clothes />,
            },
            {
              path: "food",
              element: <Food />,
            },
            {
              path: "gadgets",
              element: <Gadgets />,
            },
            {
              path: "health",
              element: <Health />,
            },
            {
              path: "shoes",
              element: <Shoes />,
            },
            {
              path: "sport-products",
              element: <SportProducts />,
            },
          ],
        },
      ])}
    </div>
  );
};

export default memo(Pages);
