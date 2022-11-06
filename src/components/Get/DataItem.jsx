import React from "react";
import { Badge } from "flowbite-react";
const DataItem = ({ data }) => {
  return (
    <li  className="py-3 sm:py-4 border rounded-xl p-2 shadow-md px-4">
      <div className="flex items-center space-x-4">
        <div className="shrink-0">
          <Badge color="info">{data.id}</Badge>
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
            {data.from}
          </p>
          <p className="truncate text-sm font-medium text-gray-900 dark:text-gray-400">
            {data.to}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          {data.amount}$
        </div>
      </div>
    </li>
  );
};

export default DataItem;
