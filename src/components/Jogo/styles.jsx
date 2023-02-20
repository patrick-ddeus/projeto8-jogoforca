import styled from "styled-components"

export const Imagem = styled.img`
    width:350px;
`;
export const Container = styled.div`
    display:flex;
    justify-content: space-between;
    margin-top:20px;
`;

export const EscolherBotao = styled.button`
  width:200px;
  height: 60px;
  font-weight :700;
  font-size:20px;
  background-color:#27AE60;
  border:0;
  border-radius:8px;
  color:white;
  cursor:pointer;
  margin-top:20px;
`;

export const BotaoContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  width:250px;
`;

export const Letra = styled.span`
  font-size:33px;
  color:${({result}) => result === "lose" ? "red" : result === "win" ? "green" : result === "progresso" ? "black" : "black"}
`;