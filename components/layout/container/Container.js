import React from "react";
import {
  StyledContainerBreakpoint,
  StyledContainerConstrained
} from "./Container.styles";

export const ContainerConstrained = React.forwardRef(
  ({ fullWidthMobile, children, ...props }, ref) => {
    return (
      <>
        <StyledContainerConstrained
          ref={ref}
          fullWidthMobile={fullWidthMobile}
          {...props}
        >
          {children}
        </StyledContainerConstrained>
      </>
    );
  }
);

export const ContainerWithBreakPoint = React.forwardRef(
  ({ fullWidthMobile, children, ...props }, ref) => {
    return (
      <>
        <StyledContainerBreakpoint
          ref={ref}
          fullWidthMobile={fullWidthMobile}
          {...props}
        >
          {children}
        </StyledContainerBreakpoint>
      </>
    );
  }
);

export const NarrowContainer = React.forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <>
        <StyledContainerConstrained ref={ref} {...props}>
          <div tw="max-w-3xl mx-auto">{children}</div>
        </StyledContainerConstrained>
      </>
    );
  }
);
