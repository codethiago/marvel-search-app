import { style } from "@mui/system";
import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  hr {
    width: 100%;
  }

  p {
    padding: 20px;
  }
  a {
      
      color: black;
    &:hover {
      color: red;
    }
`;
