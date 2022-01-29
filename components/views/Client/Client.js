import { ClientInfo, ClientPageHeader } from "@components/layout";
import React from "react";


export const Client = ({ client, openMenu, openDeleteMenu }) => {
  return (
    <>
      <ClientPageHeader
        client={client}
        openMenu={openMenu}
        openDeleteMenu={openDeleteMenu}
      />
      <ClientInfo client={client} />
    </>
  );
};
