import { forwardRef } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableRow from "./TableRow";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

type Props = React.TableHTMLAttributes<HTMLTableElement> & {
  data?: any[];
  columns?: ColumnDef<any>[];
  pageSize?: number;
  compact?: boolean;
  zebra?: boolean;
};

const Table = forwardRef<HTMLTableElement, Props>((props, ref) => {
  const { compact, zebra, className, children, ...rest } = props;

  const classes = twMerge(
    "table",
    className,
    clsx({
      "table-zebra": zebra,
      "table-compact": compact,
    })
  );
  return (
    <table {...rest} className={classes} ref={ref}>
      {children}
    </table>
  );
});

export default Object.assign(Table, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
});
