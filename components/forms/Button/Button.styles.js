import tw, { styled } from "twin.macro";

export const Button = tw`flex justify-center py-2 px-4 border-2 border-transparent rounded-md shadow-sm text-sm font-medium text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer uppercase tracking-wider`;

export const StyledButton = styled.button(
  ({ variant, disabled, size, isFullWidth, customStyles }) => [
    Button,
    variant === "primary"
      ? tw`bg-green-600 text-white hover:bg-green-700`
      : tw`bg-transparent border-green-600 text-green-600 hover:bg-green-700 hover:text-white`,
    variant === "danger" &&
      tw`bg-red-600 border-red-600 text-white hover:bg-red-700`,
    disabled && tw`opacity-80 pointer-events-none`,
    size === "small"
      ? tw`px-4 py-2`
      : size === "medium"
      ? tw`px-6 py-3`
      : tw`px-8 py-4`,
    isFullWidth && tw`w-full`
  ]
);
