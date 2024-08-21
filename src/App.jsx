import { useState } from "react";
import "./App.css";

function App() {
  const [isOffFirst, setIsOffFirst] = useState(false);
  const [isOffSec, setIsOffSec] = useState(false);
  const [isOffThird, setIsOffThird] = useState(false);
  const [isPossible, setIsPossible] = useState(false);
  return (
    <>
      <header>
        <img src="" />
        <h1>Ready To Go</h1>
      </header>

      <main>
        <section className="allButtons">
          <section className="pair">
            <div className="on">
              <button
                onClick={() => {
                  setIsOffFirst(true);
                }}
              >
                ON
              </button>
            </div>

            <div className="off">
              <button
                onClick={() => {
                  setIsOffFirst(false);
                }}
              >
                OFF
              </button>
            </div>
          </section>
          <section className="pair">
            <div className="on">
              <button
                onClick={() => {
                  setIsOffSec(true);
                }}
              >
                ON
              </button>
            </div>

            <div className="off">
              <button
                onClick={() => {
                  setIsOffSec(false);
                }}
              >
                OFF
              </button>
            </div>
          </section>
          <section className="pair">
            <div className="on">
              <button
                onClick={() => {
                  setIsOffThird(true);
                }}
              >
                ON
              </button>
            </div>

            <div className="off">
              <button
                onClick={() => {
                  setIsOffThird(false);
                }}
              >
                OFF
              </button>
            </div>
          </section>
        </section>

        <section className="final">
          {setIsOffFirst === true &&
          setIsOffSec === true &&
          setIsOffThird === true ? (
            <button className="green">Go !</button>
          ) : (
            <button className="red">No Way !</button>
          )}
        </section>
      </main>
      <footer>
        <p>Made with React by Solene</p>
      </footer>
    </>
  );
}

export default App;
