import React, { useState } from "react";
import tw from "twin.macro";

import { useForm } from "react-hook-form";
import { Button, Input } from "@components/forms";
import { ClientCard, SectionHeader } from "@components/layout";

const people = [
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    company: "8th Light",
    email: "janecooper@example.com",
    phone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    company: "8th Light",
    email: "janecooper@example.com",
    phone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    company: "8th Light",
    email: "janecooper@example.com",
    phone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
  }
];

export const Dashboard = () => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <SectionHeader sectionTitle={"Recent Clients"} />
      <ul
        role="list"
        tw="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {people.map((person) => (
          <ClientCard client={person} />
        ))}
      </ul>
    </>
  );
};
