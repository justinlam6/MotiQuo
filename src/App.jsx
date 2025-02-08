import { useState, useEffect } from "react";
import Quote from "./components/Quote.jsx";
import About from "./components/About.jsx";

const App = () => {
  const [screen, setScreen] = useState("home");

  return (
    <>
      {screen === "home" && <Quote setScreen={setScreen} />}
      {screen === "about" && <About setScreen={setScreen} />}
    </>
  );
};

export default App;
