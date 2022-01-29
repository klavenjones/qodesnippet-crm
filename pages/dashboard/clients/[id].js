import React, { useState } from "react";
import tw from "twin.macro";
import { useRouter } from "next/router";
import useSWR from "swr";

import { fetcher } from "util/fetcher";
import {
  AddClientSlideOver,
  DeleteConfirmModal,
  Navigation
} from "@components/layout";
import { Client } from "@components/views";

export default function ClientPage() {
  const router = useRouter();
  const { data, error } = useSWR(
    router.query.id ? `/api/client/${router.query.id}` : null,
    fetcher
  );
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  if (error) return <h1>Failed to load user.....</h1>;
  if (!data) return <h1>Loading......</h1>;

  return (
    <Navigation>
      <AddClientSlideOver setOpen={setOpen} open={open} client={data} />
      <DeleteConfirmModal
        setOpen={setDeleteOpen}
        open={deleteOpen}
        client={data}
      />
      <Client client={data} openMenu={setOpen} openDeleteMenu={setDeleteOpen} />
    </Navigation>
  );
}
