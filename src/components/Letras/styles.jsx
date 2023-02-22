import styled from "styled-components";

export const ButtonWrapper = styled.button`
  width:40px;
  height:40px;
  color:${({desatived}) => desatived ?  "#798A9F" : "#7AA7C7" };
  background-color:${({desatived}) => desatived ? "#9FAAB5" : "#E1ECF4"};
  border:1px solid #7AA7C7;
  cursor: pointer;
  margin:5px;
  font-size:16px;
  font-weight:700;
  text-transform: uppercase;
`;