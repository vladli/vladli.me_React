import React from "react";

const Divider = ({ vertical }: { vertical?: boolean }) => {
  if (vertical) {
    return <div className="w-px border-0 bg-gray-200 dark:bg-gray-700" />;
  } else {
    return <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />;
  }
};

export default Divider;
