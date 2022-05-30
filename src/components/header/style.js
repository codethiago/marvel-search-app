import styled from "styled-components";

export const Main = styled.div`
  padding-right: 20%;
  padding-left: 20%;
  background-color: #202020;
  p {
    color: white;
    &:hover {
      color: red;
    }
  }
  img {
    height: 45px;
  }
  margin-bottom: 30px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
