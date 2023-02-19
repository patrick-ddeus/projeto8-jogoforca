import Forca0 from "../../assets/forca0.png";
import Forca1 from "../../assets/forca1.png";
import Forca2 from "../../assets/forca2.png";
import Forca3 from "../../assets/forca3.png";
import Forca4 from "../../assets/forca4.png";
import Forca5 from "../../assets/forca5.png";
import Forca6 from "../../assets/forca6.png";
import * as J from "./styles.jsx";

const images = [Forca0, Forca1, Forca2, Forca3, Forca4, Forca5, Forca6];

export default function Jogo ({ palavra, startGame, palavraArray, contadorDeErros, resultado }) {

  return (
    <div>
      <J.Container>
        <J.Imagem src={images[contadorDeErros]} alt="" />

        <J.BotaoContainer>
          <J.EscolherBotao onClick={startGame} disabled={(resultado !== "progresso") ? true : false}>
            Escolher Palavra
          </J.EscolherBotao>
          <div data-test="word">
            {
              (resultado === "progresso") ?
                palavraArray.map((letra, index) => (
                  <J.Letra key={index}>{letra}</J.Letra>)) :
                (resultado === "win") ?
                  <J.Letra result={"win"}>{palavra}</J.Letra> :
                  <J.Letra result={"lose"}>{palavra}</J.Letra>
            }
          </div>
        </J.BotaoContainer>

      </J.Container>
    </div>
  );
}
