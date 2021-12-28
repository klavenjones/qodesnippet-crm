import React from "react";
import tw from "twin.macro";
import { StyledInput } from "./Input.styles";

export const Input = React.forwardRef(({ ...props }, ref) => {
  return (
    <div tw="my-2">
      <StyledInput type="text" ref={ref} {...props} />
    </div>
  );
});
