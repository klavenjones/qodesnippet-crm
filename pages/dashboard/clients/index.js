import React, { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import {
  PageHeader,
  Navigation,
  AddClientSlideOver,
  ClientList,
  Loader
} from "@components/layout";
import { fetcher } from "util/fetcher";

export default function ClientsPage() {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      router.push("/");
    }
  });
  const { data, error } = useSWR("/api/client", fetcher);
  const [open, setOpen] = useState(false);

  if (error) {
    return null;
  }

  if (status === "loading" || !data) {
    return <Loader />;
  }

  return (
    <>
      <Navigation>
        <PageHeader pageTitle={"Clients"} openMenu={setOpen} />
        <AddClientSlideOver open={open} setOpen={setOpen} />
        <ClientList clients={data} />
      </Navigation>
    </>
  );
}
