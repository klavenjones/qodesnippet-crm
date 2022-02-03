import React, { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Dashboard } from "@components/views";
import {
  PageHeader,
  AddClientSlideOver,
  Navigation,
  Loader
} from "@components/layout";
import { fetcher } from "util/fetcher";

export default function DashboardHome() {
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
        <PageHeader pageTitle={"Dasboard"} openMenu={setOpen} />
        <AddClientSlideOver open={open} setOpen={setOpen} />
        <Dashboard clients={data.slice(0, 4)} />
      </Navigation>
      ;
    </>
  );
}
