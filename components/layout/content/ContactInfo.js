import tw from "twin.macro";

export const ClientInfo = ({
  client: { phone, firstName, lastName, email, company, notes, title }
}) => {
  return (
    <div tw="mt-8">
      <div>
        <h3 tw="text-lg font-medium leading-6 text-gray-900">
          Contact Information
        </h3>
        <p tw="max-w-2xl mt-1 text-sm text-gray-500">
          Personal details and application.
        </p>
      </div>
      <div tw="mt-5 border-t border-gray-200">
        <dl tw="sm:divide-y sm:divide-gray-200">
          <div tw="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt tw="text-sm font-medium text-gray-500">Full name</dt>
            <dd tw="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {`${firstName} ${lastName}`}
            </dd>
          </div>
          <div tw="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt tw="text-sm font-medium text-gray-500">Company</dt>
            <dd tw="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {company}
            </dd>
          </div>
          <div tw="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt tw="text-sm font-medium text-gray-500">Title</dt>
            <dd tw="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {title}
            </dd>
          </div>
          <div tw="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt tw="text-sm font-medium text-gray-500">Email address</dt>
            <dd tw="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {email}
            </dd>
          </div>
          <div tw="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt tw="text-sm font-medium text-gray-500">Phone number</dt>
            <dd tw="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {phone}
            </dd>
          </div>
          <div tw="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt tw="text-sm font-medium text-gray-500">Notes</dt>
            <dd tw="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {notes && notes}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
