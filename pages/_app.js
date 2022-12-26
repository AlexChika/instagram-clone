import { useState, useLayoutEffect, useContext, createContext } from "react";
import "../styles/globals.css";
import Header from "../components/general/Header";
const AppContext = createContext();

function MyApp({ Component, pageProps }) {
  // if theme is true ==> dark mode
  // if theme is false ==> light mode
  const [theme, setTheme] = useState(false);

  function setDarkMode(condition) {
    if (condition) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  function changeTheme() {
    document.documentElement.classList.toggle("dark");
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";

    setTheme(localStorage.theme === "dark");
  }

  useLayoutEffect(() => {
    const isThemeStored = "theme" in localStorage;
    if (isThemeStored) {
      const isDarkSet = localStorage.theme === "dark";
      setDarkMode(isDarkSet);
      setTheme(isDarkSet);
    } else {
      const isDarkPrefered = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(isDarkPrefered);
      setTheme(isDarkPrefered);
    }
  }, []);

  // console.log(theme);

  return (
    <AppContext.Provider value={{ changeTheme, theme }}>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
export const App = () => useContext(AppContext);
