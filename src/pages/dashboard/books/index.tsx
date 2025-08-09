import { memo } from "react";
import { Outlet } from "react-router-dom";

const Books = () => {
  return (
    <div className="Books">
      <h2>Books</h2>
      <Outlet />
    </div>
  );
};

export default memo(Books);
