import React, { useEffect, useState } from "react";

import { BrowserRouter } from "react-router-dom";

import Mainpage from "./components/Mainpage";

function App() {
  const [isDark, setDarkTheme] = useState(false);
  const setToDark = () => {
    setDarkTheme(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);
  return (
    <React.Fragment>
      <BrowserRouter>
        <Mainpage setToDark={setToDark} isDark={isDark} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
