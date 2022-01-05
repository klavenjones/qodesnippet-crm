import tw, { styled } from "twin.macro";

const Container = tw`w-full max-w-7xl mx-auto`;

export const StyledContainerConstrained = styled.div(({ fullWidthMobile }) => [
  Container,
  fullWidthMobile ? tw`sm:px-6 lg:px-8` : tw`p-4 sm:px-6 lg:px-8`
]);

export const StyledContainerBreakpoint = styled.div(
  ({ fullWidthMobile, ...props }) => [
    tw`container mx-auto`,
    fullWidthMobile ? tw`sm:px-6 lg:px-8` : tw`p-4 sm:px-6 lg:px-8`,
  ]
);
