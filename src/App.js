import { createContext, useContext, useState } from "react";
import "./styles.css";

const THEME = {
  dark: {
    h2: "yellow",
    bg: "blue"
  },
  light: {
    h2: "#fafafa",
    bg: "black"
  }
};

const Context = createContext();

function ContextProvider({ children }) {
  const [themePref, setThemePref] = useState("dark");
  const [theme, setTheme] = useState(THEME[themePref ?? "dark"]);

  const toggleTheme = () => {
    setThemePref((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    setTheme(THEME[themePref]);
  };

  return (
    <Context.Provider value={{ theme, themePref, toggleTheme }}>
      {children}
    </Context.Provider>
  );
}

export default function App() {
  return (
    <ContextProvider>
      <Container />
    </ContextProvider>
  );
}

function Container() {
  const { theme, toggleTheme } = useContext(Context);

  return (
    <div className="App">
      <div style={{ backgroundColor: theme.bg, padding: "2rem" }}>
        <h1 style={{ color: theme.h2 }}>Toggle Theme</h1>
        <button className="button" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
}
