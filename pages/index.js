import { useState, useEffect } from "react";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import axios from "axios";

import tw from "twin.macro";
import { fetcher } from "../util/fetcher";

import useSWR, { mutate } from "swr";
import { Button, Input, Select, TextArea } from "@components/forms";
import {
  ContainerConstrained,
  ContainerWithBreakPoint,
  NarrowContainer
} from "@components/layout";

const url = "http://localhost:3000/api/client";

export const getServerSideProps = async () => {
  const clients = await fetcher(url);
  return { props: { clients } };
};

function Home({ clients }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const { data, error, isValidating } = useSWR("/api/client", fetcher, {
    fallbackData: { clients }
  });

  const { data: session } = useSession();

  const submitData = async (e) => {
    e.preventDefault();
    const body = {
      firstName,
      lastName,
      company,
      phone,
      email
    };
    await fetcher(`/api/client`, body);
    mutate("/api/client");
  };

  const onDelete = async (id) => {
    await axios.delete(`http://localhost:3000/api/client/${id}`);
    mutate("/api/client");
  };

  if (session) {
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
          <div tw="items-center justify-around max-w-7xl mt-6 w-full">
            <button
              className="py-6 px-12 bg-red-600 text-white rounded-full"
              onClick={() => signOut()}
            >
              Log out
            </button>
          </div>
          <div tw="grid grid-cols-1 gap-2 items-center justify-around max-w-7xl mt-6 w-full">
            <form
              onSubmit={submitData}
              tw="rounded-sm flex flex-col space-y-10"
            >
              <div tw="flex flex-col space-y-1">
                <label htmlFor="firstName" tw="text-xl text-left">
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  tw="p-3 border border-gray-500 rounded-md"
                />
              </div>
              <div tw="flex flex-col space-y-1">
                <label htmlFor="lastName" tw="text-xl text-left">
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  tw="p-3 border border-gray-500 rounded-md"
                />
              </div>
              <div tw="flex flex-col space-y-1">
                <label htmlFor="email" tw="text-xl text-left">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  tw="p-3 border border-gray-500 rounded-md"
                />
              </div>
              <div tw="flex flex-col space-y-1">
                <label htmlFor="phone" tw="text-xl text-left">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  tw="p-3 border border-gray-500 rounded-md"
                />
              </div>
              <div tw="flex flex-col space-y-1">
                <label htmlFor="company" tw="text-xl text-left">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  onChange={(e) => setCompany(e.target.value)}
                  value={company}
                  tw="p-3 border border-gray-500 rounded-md"
                />
              </div>
              <div tw="mr-auto">
                <button tw="py-4 px-8 bg-green-600 text-white rounded-full">
                  Save Client
                </button>
              </div>
            </form>
          </div>
          <div tw="grid grid-cols-1 gap-2 items-center justify-around max-w-7xl mt-6 w-full">
            {console.log("DATA FROM SWR", data)}
            {data.map((client) => (
              <>
                <div
                  key={client?.id}
                  tw="p-6 mt-6 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600"
                >
                  <h3 tw="text-2xl font-bold">{`${client.firstName} ${client.lastName}`}</h3>
                  <p tw="mt-4 text-xl">{client.company}</p>
                  <p tw="mt-4 text-xl">{client.email}</p>
                  <p tw="mt-4 text-xl">Belongs to {client.userId}</p>
                </div>
                <button
                  tw="px-3 py-6 bg-red-800 text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    onDelete(client.id);
                  }}
                >
                  Delete
                </button>
              </>
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
  return (
    <div tw="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main tw="flex flex-col items-center justify-center w-full flex-1 px-10 py-20 text-center">
        <h1 tw="mt-3 text-8xl font-semibold uppercase tracking-wide">Login</h1>

        <div tw="grid grid-cols-1 gap-2 items-center justify-around max-w-7xl mt-6 w-full">
          <button
            tw="p-6 bg-red-600 text-white rounded-full"
            onClick={() => signIn("github")}
          >
            Login
          </button>
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

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function HomePage({ clients }) {
  return (
    <>
      <h1 tw="text-9xl">INDEX</h1>
      <NarrowContainer tw="border-8">
        <Input placeholder="Email" />
        <Button variant="secondary" size="large">
          Button
        </Button>
        <Button variant="primary" size="large">
          Button
        </Button>
        <TextArea placeholder="Let's codeee!" />
        <Select>
          <option>OPTION</option>
          <option>OPTION</option>
          <option>OPTION</option>
          <option>OPTION</option>
        </Select>
      </NarrowContainer>
    </>
  );
}
