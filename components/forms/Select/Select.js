import React from "react";
import tw from "twin.macro";
import { StyledSelect } from "./Select.styles";

export const Select = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <>
      <StyledSelect ref={ref} {...props} value="Pick an Option">
        {children}
      </StyledSelect>
    </>
  );
});
