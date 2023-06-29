import "./App.css";
import FortunePhrase from "./components/Fortune";
import phrases from "./data/phrases.json";
import { useState } from "react";

function App() {
  const colors = [
    "/fondo1.jpg",
    "/fondo2.jpg",
    "/fondo3.jpg",
    "/fondo4.jpg",
    "/fondo1.jpg",
    "/fondo2.jpg",
    "/fondo3.jpg",
    "/fondo4.jpg",
    "/fondo1.jpg",
    "/fondo2.jpg",
    "/fondo3.jpg",
    "/fondo4.jpg",
    "/fondo1.jpg",
    "/fondo2.jpg",
    "/fondo3.jpg",
  ];

const colors2 = [ 
  "#008000",
  "#ff0080",
  "#ff8000",
  "#0000ff",
  "#008000",
  "#ff0080",
  "#ff8000",
  "#0000ff",
  "#008000",
  "#ff0080",
  "#ff8000",
  "#0000ff",
  "#008000",
  "#ff0080",
  "#ff8000",
 ]

  const [index, setIndex] = useState(0);

  const phraseRandom = () => {
    setIndex([Math.floor(Math.random()* (1 + phrases.length - index))])
  };

  document.body.style = `background-image: url(${colors[index]})`;

  return (
    <>
      <FortunePhrase data={phrases[index]} textColor={colors2[index]} />

      <div className="containerButton"><button className="boton" onClick={phraseRandom}>
        <p>Probar Suerte</p>
      </button>
      </div>
    </>
  );
}

export default App;