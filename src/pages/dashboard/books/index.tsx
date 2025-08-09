import { memo } from "react";
import { Outlet } from "react-router-dom";

const Books = () => {
  return (
    <div className="Books">
      <Outlet />
    </div>
  );
};

export default memo(Books);
