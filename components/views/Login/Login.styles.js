import tw, { styled } from "twin.macro";

export const LoginContainer = tw.div`min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8`;

export const FormContainer = tw.div`py-8 px-4 sm:rounded-lg sm:px-10`;

export const Container = tw`sm:mx-auto sm:w-full sm:max-w-md`;

export const LoginSectionContainer = styled.div(({ marginTop }) => [
  Container,
  marginTop && tw`mt-12`
]);
