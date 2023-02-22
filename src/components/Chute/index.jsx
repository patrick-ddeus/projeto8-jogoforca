import React from 'react';
import { Container, InputGuess, ButtonGuess } from './styles';

export default function Chute ({ palavra, resultado, setResultado, setcontadorDeErros }) {
    const [inputValue, setInputValue] = React.useState("");

    function handleButtonGuess () {
        const inputSemCaractere = inputValue.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const palavraSemCaractere = palavra.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
        if (inputSemCaractere.toLowerCase() === palavraSemCaractere.toLowerCase()) {
            setResultado("win");
        } else {
            setResultado("lose");
            setcontadorDeErros(6);
        }
        setInputValue("")
    }

    return (
        <Container>
            <span>Já sei a palavra! </span>
            <InputGuess
                data-test="guess-input"
                value={inputValue}
                onChange={(e) => { setInputValue(e.currentTarget.value); }}
                disabled={(!palavra || (resultado === "win" || resultado === "lose")) ? true : false}
            />
            <ButtonGuess
                data-test="guess-button"
                onClick={handleButtonGuess}
                disabled={(!palavra || (resultado === "win" || resultado === "lose")) ? true : false}>
                Chutar
            </ButtonGuess>
        </Container>
    );
}
