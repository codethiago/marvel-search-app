import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
  }
  margin-top: 50px;
  h4 {
    text-align: center;
  }
  @media (max-width: 715px) {
    p {
      font-size: 15px;
    }
  }
`;
export const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 20px;
  padding-bottom: 90px;
  width: 80%;
`;

export const InputBox = styled.div`
  display: flex;
  margin-bottom: 30px;
  justify-content: center;
`;
