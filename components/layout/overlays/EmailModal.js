import { Fragment } from "react";
import tw from "twin.macro";
import { Dialog, Transition } from "@headlessui/react";
import { HiOutlineX } from "react-icons/hi";
import { Button, Input, TextArea } from "@components/forms";
import { useForm } from "react-hook-form";

import axios from "axios";

//  const Email = ({ setOpen, open }) => {
//   const { register, handleSubmit, reset } = useForm();
//   return (
//     <Transition.Root show={open} as={Fragment}>
//       <Dialog
//         as="div"
//         tw="fixed inset-0 z-10 overflow-y-auto"
//         onClose={setOpen}
//       >
//         <div tw="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <Dialog.Overlay tw="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
//           </Transition.Child>

//           <span
//             tw="hidden sm:inline-block sm:align-middle sm:h-screen"
//             aria-hidden="true"
//           ></span>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//             enterTo="opacity-100 translate-y-0 sm:scale-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100 translate-y-0 sm:scale-100"
//             leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//           >
//             <div tw="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
//               <div tw="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
//                 <button
//                   type="button"
//                   tw="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//                   onClick={() => setOpen(false)}
//                 >
//                   <span tw="sr-only">Close</span>
//                   <HiOutlineX tw="w-6 h-6" aria-hidden="true" />
//                 </button>
//               </div>
//               <div tw="sm:flex sm:items-start">
//                 <div tw="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-green-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
//                   <HiOutlineEnvelope
//                     tw="w-6 h-6 text-green-600"
//                     aria-hidden="true"
//                   />
//                 </div>
//                 <div tw="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
//                   <Dialog.Title
//                     as="h3"
//                     tw="text-lg font-medium leading-6 text-gray-900"
//                   >
//                     Write an email
//                   </Dialog.Title>
//                 </div>
//               </div>
//               <div tw="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
//                 <Button
//                   type="button"
//                   tw="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:w-auto sm:text-sm"
//                   onClick={() => setOpen(false)}
//                 >
//                   Cancel
//                 </Button>
//                 <Button
//                   type="button"
//                   tw="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white  border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
//                   variant="primary"
//                   //   onClick={async () => {
//                   //     await sendEmail(email);
//                   //   }}
//                 >
//                   Send Email
//                 </Button>
//               </div>
//             </div>
//           </Transition.Child>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   );
// };

export const EmailModal = ({ setOpen, open, client }) => {
  const { register, handleSubmit, reset } = useForm();

  const submitEmail = async (data) => {
  
    // await axios.post("/api/sendgrid", { email: client.email, ...data });
    setOpen(false);
    reset();
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
              <div tw="">
                <div tw="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <Dialog.Title
                    as="h3"
                    tw="text-lg font-medium leading-6 text-gray-900"
                  >
                    Send an email
                  </Dialog.Title>
                  <div tw="mb-2">
                    <p tw="text-gray-600 text-sm">
                      Send a message to {client?.firstName}
                    </p>
                  </div>
                  <div tw="mt-4 mb-8">
                    <form
                      id="email-form"
                      onSubmit={handleSubmit(submitEmail)}
                      className="space-y-3"
                    >
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Subject
                        </label>
                        <div className="mt-1">
                          <Input
                            {...register("subject")}
                            id="subject"
                            name="subject"
                            type="text"
                            autoComplete="text"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Message
                        </label>
                        <div className="mt-1">
                          <TextArea
                            {...register("message")}
                            id="message"
                            name="message"
                            type="message"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div tw="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <Button
                  type="submit"
                  form="email-form"
                  tw="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  variant="primary"
                >
                  Send
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
