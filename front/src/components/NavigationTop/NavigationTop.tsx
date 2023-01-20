import classNames from "classnames";
import React from "react";
import TopMenu from "../../config/TopMenu";

const NavigationTop = ({ className }: { className: string }) => {
  const divClass = classNames("absolute right-5 flex flex-row ", className);
  console.log(TopMenu);
  return (
    <div className={divClass}>
      {TopMenu.map((item, i) => (
        <div key={i} className="px-2">
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default NavigationTop;
