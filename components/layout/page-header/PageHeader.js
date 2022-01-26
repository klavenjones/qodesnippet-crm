import { Button } from "@components/forms";
import React from "react";

export const PageHeader = ({ pageTitle }) => {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          {pageTitle}
        </h2>
      </div>
      <div className="flex mt-4 space-x-2 md:mt-0 md:ml-4">
        <Button variant="primary" size="small">
          Add Client
        </Button>
      </div>
    </div>
  );
};
