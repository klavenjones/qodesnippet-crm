import { Fragment } from "react";
import axios from "axios";
import tw from "twin.macro";
import Router from "next/router";
import { Dialog, Transition } from "@headlessui/react";
import { HiOutlineX } from "react-icons/hi";
import { Input, TextArea } from "@components/forms";
import { useForm } from "react-hook-form";
import { useSWRConfig } from "swr";
import { uploadImage } from "util/uploadImage";

export function AddClientSlideOver({ open, setOpen, client }) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      firstname: client?.firstName,
      lastname: client?.lastName,
      title: client?.title,
      company: client?.company,
      email: client?.email,
      phone: client?.phone,
      notes: client?.notes,
      image: client?.image
    }
  });
  const { mutate } = useSWRConfig();

  const makeRequest = async (result, data, client = null) => {
    if (client) {
      return await axios.put(`/api/client/${client.id}`, {
        firstName: data.firstname,
        lastName: data.lastname,
        ...data,
        image: result
      });
    }

    return await axios.post("/api/client", {
      firstName: data.firstname,
      lastName: data.lastname,
      ...data,
      image: result
    });
  };

  const submitClient = async (data) => {
    const { firstname, lastname, title, company, email, phone, notes, image } =
      data;

    const result = await uploadImage(image);

    if (client) {
      await makeRequest(result, data, client);
      Router.push("/dashboard/clients");
    } else {
      await makeRequest(result, data);
      mutate("/api/client");
    }
    reset();
    setOpen(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        tw="fixed inset-0 z-20 overflow-hidden"
        onClose={setOpen}
      >
        <div tw="absolute inset-0 overflow-hidden">
          <Dialog.Overlay tw="absolute inset-0" />

          <div tw="fixed inset-y-0 right-0 flex max-w-full pl-16">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div tw="w-screen max-w-md">
                <form
                  onSubmit={handleSubmit(submitClient)}
                  tw="flex flex-col h-full bg-white divide-y divide-gray-200 shadow-xl"
                >
                  <div tw="flex-1 h-0 overflow-y-auto">
                    <div tw="px-4 py-6 bg-green-700 sm:px-6">
                      <div tw="flex items-center justify-between mb-3">
                        <Dialog.Title tw="text-lg font-medium text-white">
                          New Client
                        </Dialog.Title>
                        <div tw="flex items-center ml-3 h-7">
                          <button
                            type="button"
                            tw="text-green-200 bg-green-700 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() => setOpen(false)}
                          >
                            <span tw="sr-only">Close panel</span>
                            <HiOutlineX tw="w-6 h-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div tw="mt-1">
                        <p tw="text-sm text-green-300">
                          Get started with adding a new contact
                        </p>
                      </div>
                    </div>
                    <div tw="flex flex-col justify-between flex-1">
                      <div tw="px-4 divide-y divide-gray-200 sm:px-6">
                        <div tw="pt-6 pb-5 space-y-6">
                          <div>
                            <label
                              htmlFor="firstname"
                              tw="block text-sm font-medium text-gray-900"
                            >
                              First Name
                            </label>
                            <div tw="mt-1">
                              <Input
                                {...register("firstname")}
                                type="text"
                                name="firstname"
                                id="firstname"
                                tw="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-green-500 focus:border-green-500"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="lastname"
                              tw="block text-sm font-medium text-gray-900"
                            >
                              Last Name
                            </label>
                            <div tw="mt-1">
                              <Input
                                {...register("lastname")}
                                type="text"
                                name="lastname"
                                id="lastname"
                                tw="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-green-500 focus:border-green-500"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="title"
                              tw="block text-sm font-medium text-gray-900"
                            >
                              Title
                            </label>
                            <div tw="mt-1">
                              <Input
                                {...register("title")}
                                type="text"
                                name="title"
                                id="title"
                                tw="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-green-500 focus:border-green-500"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="company"
                              tw="block text-sm font-medium text-gray-900"
                            >
                              Company Name
                            </label>
                            <div tw="mt-1">
                              <Input
                                {...register("company")}
                                type="text"
                                name="company"
                                id="company"
                                tw="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-green-500 focus:border-green-500"
                              />
                            </div>
                          </div>
                          <div tw="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div>
                              <label
                                htmlFor="email"
                                tw="block text-sm font-medium text-gray-900"
                              >
                                Email
                              </label>
                              <div tw="mt-1">
                                <Input
                                  {...register("email")}
                                  type="text"
                                  name="email"
                                  id="email"
                                  tw="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-green-500 focus:border-green-500"
                                />
                              </div>
                            </div>
                            <div>
                              <label
                                htmlFor="phone"
                                tw="block text-sm font-medium text-gray-900"
                              >
                                Phone
                              </label>
                              <div tw="mt-1">
                                <Input
                                  {...register("phone")}
                                  type="text"
                                  name="phone"
                                  id="phone"
                                  tw="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-green-500 focus:border-green-500"
                                />
                              </div>
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="image"
                              tw="block text-sm font-medium text-gray-900"
                            >
                              Client Image
                            </label>
                            <div tw="mt-1">
                              <Input
                                {...register("image")}
                                type="file"
                                name="image"
                                id="image"
                                tw="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-green-500 focus:border-green-500"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="notes"
                              tw="block text-sm font-medium text-gray-900"
                            >
                              Notes
                            </label>
                            <div tw="mt-1">
                              <TextArea
                                {...register("notes")}
                                name="notes"
                                id="notes"
                                tw="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-green-500 focus:border-green-500"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div tw="flex justify-end flex-shrink-0 px-4 py-4">
                    <button
                      type="button"
                      tw="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      tw="inline-flex justify-center px-4 py-2 ml-4 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
