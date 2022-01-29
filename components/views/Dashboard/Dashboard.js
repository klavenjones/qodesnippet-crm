import React, { useState } from "react";
import tw from "twin.macro";

import { useForm } from "react-hook-form";
import { Button, Input } from "@components/forms";
import { ClientList, SectionHeader } from "@components/layout";

export const Dashboard = ({ clients }) => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <SectionHeader sectionTitle={"Recent Clients"} />
      <ClientList clients={clients} />
    </>
  );
};
