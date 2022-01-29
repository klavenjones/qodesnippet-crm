import Link from "next/link";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export const ClientCard = ({ client }) => {
  return (
    <li
      key={client.email}
      className="flex flex-col col-span-1 text-center bg-white border border-gray-300 divide-y divide-gray-200 rounded-lg shadow-md"
    >
      <Link
        href="/dashboard/clients/[id]"
        as={`/dashboard/clients/${client.id}`}
      >
        <a className="flex flex-col flex-1 p-8 cursor-pointer hover:bg-[#fcfcfc]">
          <img
            className="flex-shrink-0 w-32 h-32 mx-auto rounded-full"
            src={client.image}
            alt=""
          />
          <h3 className="mt-6 text-sm font-medium text-gray-900">
            {`${client.firstName} ${client.lastName}`}
          </h3>
          <dl className="flex flex-col justify-between flex-grow mt-1">
            <dt className="sr-only">Title</dt>
            <dd className="text-sm text-gray-500">{client.title}</dd>
            <dt className="sr-only">Role</dt>
            <dd className="mt-3">
              <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                {client.company}
              </span>
            </dd>
          </dl>
        </a>
      </Link>
      <div>
        <div className="flex -mt-px divide-x divide-gray-200">
          <div className="flex flex-1 w-0">
            <a
              href={`mailto:${client.email}`}
              className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border border-transparent rounded-bl-lg hover:text-gray-500"
            >
              <HiOutlineMail
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
              <span className="ml-3">Email</span>
            </a>
          </div>
          <div className="flex flex-1 w-0 -ml-px">
            <a
              href={`tel:${client.phone}`}
              className="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg hover:text-gray-500"
            >
              <HiOutlinePhone
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
              <span className="ml-3">Call</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};
