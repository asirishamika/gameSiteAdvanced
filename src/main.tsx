import React from "react";
import ReactDOM from "react-dom/client";
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
import "./index.css";

const colors = {
  brand: {
    900: "#45f5a5",
    800: "#3dd18e",
    700: "#31ad75",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
