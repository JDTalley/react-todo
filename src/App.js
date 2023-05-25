import React from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

/* const lightTheme = {
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
}; */

const lightTheme = {
  colors: {
    primary: "hsl(0, 0%, 80%)",
    secondary: "hsl(205, 62%, 49%)",
    accent: "hsl(205, 62%, 29%)",
    neutral: "hsl(0, 0%, 55%)",
    white: "hsl(0, 0%, 90%)",
  },
};

const darkTheme = {
  colors: {
    primary: "hsl(0, 0%, 18%)",
    secondary: "hsl(205, 62%, 49%)",
    accent: "hsl(205, 62%, 70%)",
    neutral: "hsl(0, 0%, 35%)",
    white: "hsl(0, 0%, 90%)",
  },
};

/* const darkTheme = {
  colors: {
    grayscale: {
      light: "hsl(0, 0%, 35%)",
      main: "hsl(0, 0%, 15%)",
      dark: "hsl(0, 0%, 8%)",
      contrast: "hsl(0, 0%, 70%)",
    },
    primary: {
      light: "hsl(205, 62%, 49%)",
      main: "hsl(205, 62%, 29%)",
      dark: "hsl(205, 62%, 9%)",
      lightGray: "hsl(0, 0%, 35%)",
      contrast: "hsl(0, 0%, 18%)",
    },
    secondary: {
      light: "hsl(1, 55%, 52%)",
      main: "hsl(1, 55%, 32%)",
      dark: "hsl(1, 55%, 12%)",
      contrast: "hsl(0, 0%, 18%)",
    },
  },
};
 */
const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.primary};
  background: linear-gradient(
    135deg,
    ${({ theme }) =>
      theme.colors.primary.main + "," + theme.colors.primary.dark}
  );
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-grow: 2;

  @media (min-width: 700px) {
    flex-direction: column;
  }
`;

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Navbar
          isDarkMode={isDarkMode}
          setIsDarkMode={handleThemeChange}
        ></Navbar>
        <Main>
          <TodoList />
        </Main>
        <footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
