import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Dashboard } from "@components/views";
import { Navigation } from "@components/layout/navigation/Navigation";
import { PageHeader } from "@components/layout";

export default function DashboardHome() {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      router.push("/");
    }
  });

  if (status === "loading") {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <Navigation>
        <PageHeader pageTitle={"Dasboard"} />
        <Dashboard />
      </Navigation>
      ;
    </>
  );
}
