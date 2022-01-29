import React, { useState } from "react";
import tw from "twin.macro";

import { ClientList } from "@components/layout";

export const Clients = ({ clients }) => {
  return (
    <>
      <ClientList clients={clients} />
    </>
  );
};
