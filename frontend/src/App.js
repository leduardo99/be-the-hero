import React, { createContext } from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import "./config/ReactotronConfig";

import usePersistedState from "./utils/usePersistedState";

import Routes from "./routes";
import GlobalStyle from "./styles/global";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import store from "./store";

export const AppContext = createContext({});

function App() {
  const [theme, setTheme] = usePersistedState("theme", dark);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <Provider store={store}>
      <AppContext.Provider value={{ toggleTheme, theme }}>
        <ThemeProvider theme={theme}>
          <Routes />
          <GlobalStyle />
        </ThemeProvider>
      </AppContext.Provider>
    </Provider>
  );
}

export default App;
