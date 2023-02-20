import { useState } from 'react';
import { ButtonWrapper } from "./styles";

export default function Button ({ value, palavra, palavraArray, setPalavraArray, contadorDeErros, setcontadorDeErros, setResultado, inGame,  }) {
    const [isEnable, setIsEnable] = useState(true)

    function handleButtonClick (event) {
        setIsEnable(false);
       
        const currentLetter = event.currentTarget.innerText.toLowerCase();
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

        if(transformedArray.join("") === palavra){
            setResultado("win");
        }

        const contador = contadorDeErros + 1
        if (contador === 6) {
            setResultado("lose");
        }
    }

    return (
        <ButtonWrapper active={isEnable && inGame && palavra} onClick={handleButtonClick} disabled={(isEnable && inGame && palavra) ? false : true}>
            {value}
        </ButtonWrapper>
    );
}
