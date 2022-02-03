import axios from "axios";
import { useSWRConfig } from "swr";
import { useForm } from "react-hook-form";
import tw from "twin.macro";
import { uploadImage } from "util/uploadImage";
import { Button } from "@components/forms";

export const ClientPageHeader = ({
  client: { id, firstName, lastName, company, title, image },
  openMenu,
  openDeleteMenu
}) => {
  const { mutate } = useSWRConfig();
  const { register, handleSubmit, reset } = useForm();

  const handleOnChange = async (data) => {
    const result = await uploadImage(data.image);
    await axios.put(`/api/client/${id}`, {
      image: result
    });
    mutate(`/api/client/${id}`);
    reset();
  };

  return (
    <div tw="md:flex md:items-center md:justify-between md:space-x-5">
      <div tw="flex items-start space-x-5">
        <div tw="flex-shrink-0">
          <form
            onChange={handleSubmit(handleOnChange)}
            className="relative hidden overflow-hidden rounded-full lg:block"
          >
            <img
              className="relative w-16 h-16 rounded-full"
              src={image}
              alt=""
            />
            <label
              htmlFor="image"
              className="absolute inset-0 flex items-center justify-center w-full h-full text-sm font-medium text-white bg-black bg-opacity-75 opacity-0 hover:opacity-100 focus-within:opacity-100"
            >
              <span>Change</span>
              <span className="sr-only"> user photo</span>
              <input
                {...register("image")}
                type="file"
                id="image"
                name="image"
                className="absolute inset-0 w-full h-full border-gray-300 rounded-md opacity-0 cursor-pointer"
              />
            </label>
          </form>
        </div>

        <div tw="pt-1.5">
          <h1 tw="text-2xl font-bold text-gray-900">{`${firstName} ${lastName}`}</h1>
          <p tw="text-sm font-medium text-gray-500">
            {title}
            {" - "}
            {company}
            {" - "}
            Added on <time dateTime="2020-08-25">August 25, 2020</time>
          </p>
          <p tw="text-sm font-medium text-gray-500"></p>
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
