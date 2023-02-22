import React, { useState } from "react";
import palavras from "../../palavras";
import Letras from "../Letras/index.jsx";
import Jogo from "../Jogo";
import Chute from "../Chute";
import * as StylesApp from "./styles.jsx";

function App () {
  const [palavra, setPalavra] = useState("");
  const [palavraArray, setPalavraArray] = useState([]);
  const [contadorDeErros, setcontadorDeErros] = useState(0);
  const [resultado, setResultado] = useState("inicial");
  const [botoesPressionados, setBotoesPressionados] = useState([]);

  function startGame () {
    const palavraSorteadaSemEspecial = sorteaPalavra();
    setResultado("progresso");
    setPalavra(palavraSorteadaSemEspecial);
    setPalavraArray(palavraSorteadaSemEspecial.split("").map((_) => "_ "));
    resetGame();
  }

  function sorteaPalavra () {
    const numeroAleatorio = Math.floor(Math.random() * palavras.length);
    const palavraSorteada = palavras[numeroAleatorio];
    return palavraSorteada.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function resetGame () {
    setcontadorDeErros(0);
    setResultado("inicial");
    setBotoesPressionados([]);
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
            botoesPressionados={botoesPressionados}
            setBotoesPressionados={setBotoesPressionados}
          />
        </StylesApp.LetrasWrapper>

        <Chute
          palavra={palavra}
          resultado={resultado}
          setResultado={setResultado}
          setcontadorDeErros={setcontadorDeErros}
        />
      </StylesApp.Container>
    </>
  );
}

export default App;
