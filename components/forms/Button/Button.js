import React from "react";
import { StyledButton } from "./Button.styles";

export const Button = React.forwardRef(
  ({ children, variant, size, ...props }, ref) => {
    return (
      <div tw="my-2">
        <StyledButton
          type="button"
          variant={variant}
          size={size}
          ref={ref}
          {...props}
        >
          {children}
        </StyledButton>
      </div>
    );
  }
);
