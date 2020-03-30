import React, { createContext } from "react";
import { ThemeProvider } from "styled-components";
import usePersistedState from "./utils/usePersistedState";

import SignIn from "./pages/SignIn";
import GlobalStyle from "./styles/global";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

export const AppContext = createContext({});

function App() {
  const [theme, setTheme] = usePersistedState("theme", dark);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <AppContext.Provider value={toggleTheme}>
      <ThemeProvider theme={theme}>
        <SignIn />
        <GlobalStyle />
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
