import styled from 'styled-components';

export const Container = styled.div`
    max-width: 664px;
    margin: 40px auto;
    text-align:center;
`;

export const InputGuess = styled.input`
    width:353px;
    height:40px;
    background-color: #fff;
    border: 1px solid #CCCCCC;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    outline:0;
    padding:0 14px;
`;

export const ButtonGuess = styled.button`
  width:100px;
  height:40px;
  background: #E1ECF4;
  border: 1px solid #7AA7C7;
  border-radius: 3px;
  color: #3C76A1;
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  cursor:pointer;
  margin-left:20px;
`;
