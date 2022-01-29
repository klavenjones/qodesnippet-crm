import { Button } from "@components/forms";
import tw from "twin.macro";

export const ClientPageHeader = ({
  client: { firstName, lastName, company, image },
  openMenu,
  openDeleteMenu
}) => {
  return (
    <div tw="md:flex md:items-center md:justify-between md:space-x-5">
      <div tw="flex items-start space-x-5">
        <div tw="flex-shrink-0">
          <div tw="relative">
            <img tw="w-16 h-16 rounded-full" src={image} alt="" />
            <span
              tw="absolute inset-0 rounded-full shadow-inner"
              aria-hidden="true"
            />
          </div>
        </div>

        <div tw="pt-1.5">
          <h1 tw="text-2xl font-bold text-gray-900">{`${firstName} ${lastName}`}</h1>
          <p tw="text-sm font-medium text-gray-500">
            <a href="#" tw="text-gray-900">
              {company}
            </a>{" "}
            on <time dateTime="2020-08-25">August 25, 2020</time>
          </p>
        </div>
      </div>
      <div tw="flex flex-col-reverse mt-6 space-y-4 space-y-reverse justify-self-stretch sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
        <Button
          onClick={() => openMenu(true)}
          tw="w-full"
          variant="primary"
          size="small"
        >
          Edit
        </Button>
        <Button
          onClick={() => openDeleteMenu(true)}
          tw="w-full"
          variant="danger"
          size="small"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
