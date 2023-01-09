import { Updater } from "@tanstack/react-table";
import React from "react";
import Pagination from "../Pagination/Pagination";

interface ITablePagination {
  getPageCount: () => number;
  previousPage: () => void;
  getCanPreviousPage: () => boolean;
  nextPage: () => void;
  getCanNextPage: () => boolean;
  setPageSize: (updater: Updater<number>) => void;
  [key: string]: any;
}

const TablePagination = (props: ITablePagination) => {
  return (
    <div className="inline-flex select-none -space-x-px">
      <button
        className="ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        onClick={() => props.previousPage()}
        disabled={!props.getCanPreviousPage}
      >
        Previous
      </button>
      <button
        className="rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        onClick={() => props.nextPage()}
        disabled={!props.getCanNextPage}
      >
        Next
      </button>
      <select
        className="rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:placeholder-gray-400 dark:focus:border-blue-500 "
        value={props.getState().pagination.pageSize}
        onChange={(e) => {
          props.setPageSize(Number(e.target.value));
        }}
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TablePagination;
