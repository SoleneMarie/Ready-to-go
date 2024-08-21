import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [isOnFirst, setIsOnFirst] = useState(false);
  const [isOnSec, setIsOnSec] = useState(false);
  const [isOnThird, setIsOnThird] = useState(false);
  return (
    <>
      <Header src="" title="Ready To Go" />

      <Main
        stateFirst={isOnFirst}
        setFirst={setIsOnFirst}
        stateSec={isOnSec}
        setSec={setIsOnSec}
        stateThird={isOnThird}
        setThird={setIsOnThird}
      />
      <Footer with="React" by="Solène" />
    </>
  );
}

export default App;
