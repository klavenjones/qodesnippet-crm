import { Fragment, useState } from "react";
import tw from "twin.macro";
import { Dialog, Transition } from "@headlessui/react";
import { HiOutlineExclamation, HiOutlineX } from "react-icons/hi";
import { Button } from "@components/forms";
import Router from "next/router";
import axios from "axios";

export const DeleteConfirmModal = ({ setOpen, open, client }) => {
  console.log(client.id);
  const deleteClient = async (clientId) => {
    return axios.delete(`/api/client/${clientId}`);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        tw="fixed inset-0 z-10 overflow-y-auto"
        onClose={setOpen}
      >
        <div tw="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay tw="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            tw="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div tw="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div tw="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                <button
                  type="button"
                  tw="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  onClick={() => setOpen(false)}
                >
                  <span tw="sr-only">Close</span>
                  <HiOutlineX tw="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              <div tw="sm:flex sm:items-start">
                <div tw="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                  <HiOutlineExclamation
                    tw="w-6 h-6 text-red-600"
                    aria-hidden="true"
                  />
                </div>
                <div tw="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <Dialog.Title
                    as="h3"
                    tw="text-lg font-medium leading-6 text-gray-900"
                  >
                    Delete Client
                  </Dialog.Title>
                  <div tw="mt-2">
                    <p tw="text-sm text-gray-500">
                      Are you sure you want to delete this client?
                    </p>
                  </div>
                </div>
              </div>
              <div tw="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <Button
                  type="button"
                  tw="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={async () => {
                    await deleteClient(client.id);
                    Router.push("/dashboard/clients");
                  }}
                >
                  Delete
                </Button>
                <Button
                  type="button"
                  tw="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
