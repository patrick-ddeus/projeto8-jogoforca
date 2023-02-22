import { ButtonWrapper } from './styles';
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function Letras ({ palavra, setPalavraArray, palavraArray, contadorDeErros, setcontadorDeErros, resultado, setResultado, botoesPressionados, setBotoesPressionados }) {
    const inGame = (resultado === "ongoing" ? false : true);
    function handleButtonClick (event) {
        const currentLetter = event.currentTarget.innerText.toLowerCase();
        const contador = contadorDeErros + 1;

        if (!(botoesPressionados.includes(currentLetter))) {
            setBotoesPressionados([...botoesPressionados, currentLetter]);
        }
        const transformedArray = palavraArray.map((backslash, index) => {
            if (currentLetter === palavra[index]) {
                return currentLetter;
            }
            return backslash;
        });

        setPalavraArray(transformedArray);

        if (!(palavra.includes(currentLetter))) {
            setcontadorDeErros((previousState) => previousState + 1);
        }

        if (transformedArray.join("") === palavra) {
            setResultado("win");
        }

        if (contador === 6) {
            setResultado("lose");
        }
    }

    return (
        <div>
            {alfabeto.map(letra => (
                <ButtonWrapper
                    desatived={botoesPressionados.includes(letra) || !palavra}
                    onClick={handleButtonClick}
                    disabled={(botoesPressionados.includes(letra) || (inGame || !palavra)) ? true : false}
                    data-test="letter"
                    key={letra}
                >
                    {letra}
                </ButtonWrapper>
            ))}
        </div>
    );
}

export default Letras;