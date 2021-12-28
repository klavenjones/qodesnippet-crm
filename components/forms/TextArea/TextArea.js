import React from "react";
import tw from "twin.macro";
import { StyledTextArea } from "./TextArea.styles";

export const TextArea = React.forwardRef(({ ...props }, ref) => {
  return (
    <div tw="my-2">
      <StyledTextArea {...props} ref={ref} />
    </div>
  );
});
