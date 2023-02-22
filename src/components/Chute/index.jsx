import React from 'react';
import { Container, InputGuess, ButtonGuess } from './styles';

export default function Chute ({ palavra, setResultado, setcontadorDeErros }) {
    const [inputValue, setInputValue] = React.useState("");

    function handleButtonGuess () {
        const inputSemCaractere = inputValue.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        if (inputSemCaractere.toLowerCase() === palavra.toLowerCase()) {
            setResultado("win");
        } else {
            setResultado("lose");
            setcontadorDeErros(6);
        }
    }

    return (
        <Container>
            <span>Já sei a palavra! </span>
            <InputGuess
                data-test="guess-input"
                value={inputValue}
                onChange={(e) => { setInputValue(e.currentTarget.value); }}
            />
            <ButtonGuess
                data-test="guess-button"
                onClick={handleButtonGuess}>
                Chutar
            </ButtonGuess>
        </Container>
    );
}
