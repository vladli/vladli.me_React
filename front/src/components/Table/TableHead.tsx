import React from "react";

type Props = React.TableHTMLAttributes<HTMLTableSectionElement> & {
  children?: React.ReactNode[];
};

const TableHead = React.forwardRef<HTMLTableSectionElement, Props>(
  ({ children, ...props }, ref) => {
    return (
      <thead {...props} ref={ref}>
        <tr>
          {children?.map((child, i) => {
            return <th key={i}>{child}</th>;
          })}
        </tr>
      </thead>
    );
  }
);

export default TableHead;
