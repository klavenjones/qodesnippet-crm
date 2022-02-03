import tw from "twin.macro";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { fetcher } from "../util/fetcher";
import { Loader, NarrowContainer } from "@components/layout";
import { Login } from "@components/views";

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function HomePage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated" && status !== "loading") {
      router.push("/dashboard");
    }
  }, [status]);

  if (status === "loading" && status !== "authenticated") {
    return <Loader />;
  }

  return (
    <div tw="max-w-screen-2xl relative overflow-hidden grid grid-cols-1 sm:grid-cols-2 mx-auto py-20 h-screen">
      <div tw="hidden md:block absolute w-full h-auto">
        <img tw="object-cover" src="/backdrop.jpg" alt="Login Illustration" />
      </div>
      <div tw="h-full z-10 md:pt-24 md:pr-20">
        <NarrowContainer>
          <Login />
        </NarrowContainer>
      </div>
    </div>
  );
}
