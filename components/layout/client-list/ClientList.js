import React from "react";
import tw from "twin.macro";

import { ClientCard } from "..";

export const ClientList = ({ clients }) => {
  return (
    <ul
      role="list"
      tw="my-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {clients.map((client) => (
        <ClientCard key={client.id} client={client} />
      ))}
    </ul>
  );
};
