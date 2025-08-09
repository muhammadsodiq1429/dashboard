import type { JSX } from "react";

export interface ILink {
  id: number;
  name?: string;
  path: string;
  element: JSX.Element;
  children?: ILink[];
}
