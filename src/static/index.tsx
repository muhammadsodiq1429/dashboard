import Accessories from "../pages/dashboard/accessories";
import All from "../pages/dashboard/accessories/all";
import ForMan from "../pages/dashboard/accessories/for-man";
import ForWoman from "../pages/dashboard/accessories/for-woman";
import Appliances from "../pages/dashboard/appliances";
import AutoProducts from "../pages/dashboard/auto-products";
import Books from "../pages/dashboard/books";
import ChildrenLiterature from "../pages/dashboard/books/children-literature";
import Literature from "../pages/dashboard/books/literature";
import ScientificAndEducational from "../pages/dashboard/books/scientific-and-educational";
import Novels from "../pages/dashboard/books/scientific-and-educational/novels";
import Clothes from "../pages/dashboard/clothes";
import Food from "../pages/dashboard/food";
import Gadgets from "../pages/dashboard/gadgets";
import Health from "../pages/dashboard/health";
import Shoes from "../pages/dashboard/shoes";
import SportProducts from "../pages/dashboard/sport-products";
import type { ILink } from "../types";

export const LINKS: ILink[] = [
  {
    id: 1,
    path: "books",
    element: <Books />,
    children: [
      {
        id: 1,
        path: "literature",
        name: "Literature",
        element: <Literature />,
        children: [
          {
            id: 1,
            path: "novels",
            name: "Novels",
            element: <Novels />,
          },
          {
            id: 2,
            path: "short-stories-and-novellas",
            name: "Short Stories and Novellas",
            element: <></>,
          },
          {
            id: 3,
            path: "poetry",
            name: "Poetry",
            element: <></>,
          },
        ],
      },
      {
        id: 2,
        path: "scientific-and-educational",
        name: "Scientific and Educational",
        element: <ScientificAndEducational />,
        children: [
          {
            id: 1,
            path: "history",
            name: "History",
            element: <>History</>,
          },
          {
            id: 2,
            path: "science-and-technology",
            name: "Science and Technology",
            element: <></>,
          },
          {
            id: 3,
            path: "psychology-and-philosophy",
            name: "Psychology and Philosophy",
            element: <></>,
          },
        ],
      },
      {
        id: 3,
        path: "children-literature",
        name: "Children Literature",
        element: <ChildrenLiterature />,
      },
    ],
  },
  {
    id: 2,
    path: "accessories",
    element: <Accessories />,
    children: [
      {
        id: 1,
        path: "all",
        name: "All",
        element: <All />,
      },
      {
        id: 2,
        path: "for-man",
        name: "For man",
        element: <ForMan />,
      },
      {
        id: 3,
        path: "for-woman",
        name: "For woman",
        element: <ForWoman />,
      },
    ],
  },
  {
    id: 3,
    path: "appliances",
    element: <Appliances />,
  },
  {
    id: 4,
    path: "auto-products",
    element: <AutoProducts />,
  },
  {
    id: 5,
    path: "clothes",
    element: <Clothes />,
  },
  {
    id: 6,
    path: "food",
    element: <Food />,
  },
  {
    id: 7,
    path: "gadgets",
    element: <Gadgets />,
  },
  {
    id: 8,
    path: "health",
    element: <Health />,
  },
  {
    id: 9,
    path: "shoes",
    element: <Shoes />,
  },
  {
    id: 10,
    path: "sport-products",
    element: <SportProducts />,
  },
];

export const ACCESSORIES_LINK = [
  {
    id: 1,
    index: true,
    path: "all",
  },
  {
    id: 2,
    path: "for-man",
  },
  {
    id: 3,
    path: "for-woman",
  },
];
