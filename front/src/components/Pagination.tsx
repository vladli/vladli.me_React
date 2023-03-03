import clsx from "clsx";
import { DOTS, usePagination } from "hooks/usePagination";
import React from "react";

type Props = {};

const Pagination = (props: any) => {
  const {
    getState,
    getPageCount,
    previousPage,
    getCanPreviousPage,
    nextPage,
    getCanNextPage,
    setPageSize,
    setPageIndex,

    onPageChange,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;
  console.log(getPageCount(), getState().pagination.pageIndex);
  const paginationRange: any = usePagination({
    currentPage: getState().pagination.pageIndex,
    totalCount: getPageCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    nextPage();
  };

  const onPrevious = () => {
    previousPage();
  };

  let lastPage = getPageCount();
  return (
    <ul className={clsx("pagination-container", { [className]: className })}>
      {/* Left navigation arrow */}
      <li
        className={clsx("pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNumber: any) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }

        // Render our Page Pills
        return (
          <li
            className={clsx("pagination-item", {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={clsx("pagination-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
