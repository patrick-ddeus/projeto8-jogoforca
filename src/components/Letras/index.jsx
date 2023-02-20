import Button from '../button';

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function Letras ({palavra, setPalavraArray, palavraArray, contadorDeErros, setcontadorDeErros, resultado, setResultado}) {
    return (
        <div>
            {alfabeto.map(letra => (
                <Button 
                value={letra} 
                key={letra} 
                palavra={palavra} 
                palavraArray={palavraArray} 
                setPalavraArray={setPalavraArray}
                contadorDeErros={contadorDeErros}
                setcontadorDeErros={setcontadorDeErros}
                setResultado={setResultado}
                inGame={resultado !== "inicial" ? false : true}
                />
                
            ))}
        </div>
    );
}

export default Letras;