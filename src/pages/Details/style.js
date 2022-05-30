import styled, { keyframes } from "styled-components";

const appearFromTop = keyframes`
    from{
        opacity: 0;
        transform: translateY(-150px)
    }
    to{
        opacity: 1;
        transform: translateY(0px)
    }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Div = styled.div`
  animation: ${appearFromTop} 1s;
  display: flex;
  align-items: center;
  background-color: #202020;
  color: white;

  img {
    display: block;
    width: 400px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    padding-right: 30px;
  }
  p {
    width: 30vw;
    padding-right: 30px;
  }
  @media (max-width: 900px) {
    flex-direction: column;

    img {
      padding-right: 0px;
      width: 200px;
    }
    width: 400px;
    text-align: center;
    justify-content: center;
    p {
      width: 50vw;
      padding-right: 10px;
    }
    h1 {
      font-size: 30px;
    }
  }
`;

export const Redirect = styled.div`
  display: flex;
  justify-content: space-around;

  h2 {
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 2px;
    padding-bottom: 2px;
    margin-top: 30px;
    font-size: 30px;
    background-color: red;
    &:hover {
      background-color: white;
    }
    &:hover {
      color: red;
    }
  }

  @media (max-width: 900px) {
    h2 {
      font-size: 20px;
    }
  }
`;
