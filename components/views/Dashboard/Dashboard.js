import React from "react";
import { signOut } from "next-auth/react";
export const Dashboard = () => {
  return (
    <>
      <h1 className="text-xl my-10">Dashboard</h1>
      <button
        className="bg-green-500 text-white text-xl uppercase px-8 py-4"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </>
  );
};
