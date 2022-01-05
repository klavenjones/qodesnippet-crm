import React, { useEffect } from "react";
import tw from "twin.macro";
import { signIn } from "next-auth/react";
import { FaGithub, FaGoogle, FaEnvelope, FaFacebook } from "react-icons/fa";
import { LoginContainer, LoginSectionContainer } from "./Login.styles";
import { Button, Input } from "@components/forms";

export const Login = () => {
  return (
    <LoginContainer tw="space-y-8">
      <LoginSectionContainer>
        <h2 tw="mt-6 text-center font-bold uppercase tracking-wider sm:text-left text-2xl text-gray-900">
          Log into your account
        </h2>
      </LoginSectionContainer>
      <LoginSectionContainer>
        <div>
          <div tw="space-y-6">
            <div>
              <Button
                onClick={() => signIn("google")}
                tw="flex items-center bg-red-600 border-red-600 text-white w-full hover:bg-white hover:text-red-600"
              >
                <span tw="inline-block mr-4">
                  <FaGoogle tw="h-4 w-4" />
                </span>{" "}
                Log in with Google
              </Button>
            </div>
            <div>
              <Button
                onClick={() => signIn("github")}
                tw="flex items-center bg-gray-800 border-gray-800 text-white w-full hover:bg-white hover:text-gray-800"
              >
                <span tw="inline-block mr-4">
                  <FaGithub tw="h-4 w-4" />
                </span>{" "}
                Log in with Github
              </Button>
            </div>
          </div>
        </div>
      </LoginSectionContainer>
      <LoginSectionContainer>
        <p tw="text-center text-xl uppercase">Or</p>
      </LoginSectionContainer>
      <LoginSectionContainer>
        <div className="space-y-6">
          <Input placeholder="Enter Email" />
          <Button
            onClick={() => signIn("email", { email: "klavensjones@gmail.com" })}
            tw="flex items-center text-white w-full"
            variant="primary"
          >
            <span tw="inline-block mr-4">
              <FaEnvelope tw="h-4 w-4" />
            </span>{" "}
            Log in with your email
          </Button>
        </div>
      </LoginSectionContainer>
    </LoginContainer>
  );
};
