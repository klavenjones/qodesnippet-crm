import "tailwindcss/tailwind.css";
import { Global, css } from "@emotion/react";
import { GlobalStyles as BaseStyles } from "twin.macro";

const customStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
  body {
    font-family: "Karla", sans-serif;
    padding-top: 6rem;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <div tw="relative">
      <BaseStyles />
      <Global styles={customStyles} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
