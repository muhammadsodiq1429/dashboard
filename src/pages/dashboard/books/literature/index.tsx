import { memo } from "react";
import { Outlet } from "react-router-dom";

const Literature = () => {
  return (
    <div className="Literature">
      <h2>Literature</h2>
      <Outlet />
    </div>
  );
};

export default memo(Literature);
