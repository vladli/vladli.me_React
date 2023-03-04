import React from "react";
import ReactPaginate from "react-paginate";

type Props = {
  pageCount: number;
  onPageChange: any;
};

export default function Pagination({ pageCount, onPageChange }: Props) {
  const linkClasses =
    "flex flex-1 h-full justify-center items-center m-[-0.75rem]";

  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={onPageChange}
      containerClassName="btn-group flex justify-center mt-2"
      pageClassName="btn btn-sm"
      pageLinkClassName={linkClasses}
      activeClassName="btn-active"
      previousClassName="btn btn-sm"
      previousLinkClassName={linkClasses}
      nextClassName="btn btn-sm"
      nextLinkClassName={linkClasses}
      disabledClassName="btn-disabled"
      previousLabel={"<"}
      nextLabel={">"}
    />
  );
}
