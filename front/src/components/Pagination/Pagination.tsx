import React from "react";

interface IPagination {
  ref: React.ForwardedRef<any>;
  count?: number;
}

const PaginationItem = ({ count = 5 }: IPagination) => {
  const getPages = () => {
    let li = [];
    for (let i = 1; i <= count; i++) {
      li.push(
        <li
          key={i}
          className="border border-gray-400 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          {i}
        </li>
      );
    }
    return li;
  };
  return (
    <>
      <li className="ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Previous
      </li>
      <li className="rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Next
      </li>
    </>
  );
};

const Pagination = ({ ref, count }: IPagination) => {
  return (
    <div>
      <ul className="inline-flex -space-x-px">
        <PaginationItem ref={ref} count={count} />
      </ul>
    </div>
  );
};

export default Pagination;
