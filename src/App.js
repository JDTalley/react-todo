import React from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import Todos from "./Components/Todos";

const theme = {
  colors: {
    grayscale: {
      light: "hsl(0, 0%, 55%)",
      main: "hsl(0, 0%, 35%)",
      dark: "hsl(0, 0%, 18%)",
      contrast: "hsl(0, 0%, 90%)",
    },
    primary: {
      light: "hsl(205, 62%, 70%)",
      main: "hsl(205, 62%, 49%)",
      dark: "hsl(205, 62%, 29%)",
      contrast: "hsl(0, 0%, 18%)",
    },
    secondary: {
      light: "hsl(1, 55%, 72%)",
      main: "hsl(1, 55%, 52%)",
      dark: "hsl(1, 55%, 32%)",
      contrast: "hsl(0, 0%, 18%)",
    },
  },
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary.dark};
  background: linear-gradient(
    135deg,
    ${({ theme }) =>
      theme.colors.primary.main + "," + theme.colors.primary.dark}
  );
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Todos />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
