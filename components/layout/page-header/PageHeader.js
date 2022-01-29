import tw from "twin.macro";
import { Button } from "@components/forms";

export const PageHeader = ({ pageTitle, openMenu }) => {
  return (
    <div tw="md:flex md:items-center md:justify-between">
      <div tw="flex-1 min-w-0">
        <h2 tw="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          {pageTitle}
        </h2>
      </div>
      <div tw="flex mt-4 space-x-2 md:mt-0 md:ml-4">
        <Button onClick={() => openMenu(true)} variant="primary" size="small">
          Add Client
        </Button>
      </div>
    </div>
  );
};
