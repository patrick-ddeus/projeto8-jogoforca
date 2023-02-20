import styled from "styled-components";

export const ButtonWrapper = styled.button`
  width:40px;
  height:40px;
  color:${({active}) => active ? "#7AA7C7" : "#798A9F"};
  background-color:${({active}) => active ? "#E1ECF4": "#9FAAB5"};
  border:1px solid #7AA7C7;
  cursor: pointer;
  margin:5px;
  font-size:16px;
  font-weight:700;
  text-transform: uppercase;

`;