import { useState, useEffect, useContext, createContext } from "react";
import "../styles/globals.css";
import Header from "../components/general/Header";
const AppContext = createContext();

function MyApp({ Component, pageProps }) {
  // if theme is true ==> dark mode
  // if theme is false ==> light mode
  const [theme, setTheme] = useState(false);

  // temp implementation
  const [timer, setTimer] = useState(0);

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

  useEffect(() => {
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

  // splash screen effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer < 2) {
        setTimer(timer + 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  // app
  return (
    <AppContext.Provider value={{ changeTheme, theme, timer }}>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
export const App = () => useContext(AppContext);
