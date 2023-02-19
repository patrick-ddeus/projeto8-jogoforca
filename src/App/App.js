import React, { useState } from "react";
import palavras from "../../palavras";
import Letras from "../Letras/index.jsx";
import Jogo from "../Jogo";
import * as StylesApp from "./styles.jsx";

function App () {
  const [palavra, setPalavra] = useState("");
  const [palavraArray, setPalavraArray] = useState([]);
  const [contadorDeErros, setcontadorDeErros] = useState(0);
  const [resultado, setResultado] = useState("progresso");

  function startGame () {
    const numeroAleatorio = Math.floor(Math.random() * palavras.length);
    const palavraSorteada = palavras[numeroAleatorio];
    setPalavra(palavraSorteada);
    setPalavraArray(palavraSorteada.split("").map((_) => "_ "));
  }

  return (
    <>
      <StylesApp.Global />
      <StylesApp.Container>
        <Jogo
          palavra={palavra}
          startGame={startGame}
          palavraArray={palavraArray}
          contadorDeErros={contadorDeErros}
          resultado={resultado}
        />
        <StylesApp.LetrasWrapper>
          <Letras
            palavra={palavra}
            palavraArray={palavraArray}
            setPalavraArray={setPalavraArray}
            contadorDeErros={contadorDeErros}
            setcontadorDeErros={setcontadorDeErros}
            resultado={resultado}
            setResultado={setResultado}
          />

        </StylesApp.LetrasWrapper>

      </StylesApp.Container>
    </>
  );
}

export default App;
