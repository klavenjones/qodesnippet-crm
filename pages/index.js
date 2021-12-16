import Head from "next/head";
import tw from "twin.macro";

import prisma from "../lib/prisma";

export const getStaticProps = async () => {
  const clients = await prisma.client.findMany({
    select: {
      firstName: true,
      lastName: true,
      company: true,
      phone: true,
      email: true
    }
  });

  return { props: { clients } };
};

export default function Home({ clients }) {
  return (
    <div tw="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main tw="flex flex-col items-center justify-center w-full flex-1 px-10 py-20 text-center">
        <h1 tw="mt-3 text-8xl font-semibold uppercase tracking-wide">
          Clients
        </h1>

        <div tw="grid grid-cols-1 gap-2 items-center justify-around max-w-7xl mt-6 w-full">
          {clients.map((client) => (
            <a
              key={client.id}
              href="https://nextjs.org/docs"
              tw="p-6 mt-6 text-left border  rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 tw="text-2xl font-bold">{`${client.firstName} ${client.lastName}`}</h3>
              <p tw="mt-4 text-xl">{client.company}</p>
              <p tw="mt-4 text-xl">{client.email}</p>
            </a>
          ))}
        </div>
      </main>

      <footer tw="flex items-center justify-center w-full h-24 border-t">
        <a
          tw="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" tw="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
