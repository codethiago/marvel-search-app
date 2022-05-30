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

export const Div = styled.div`
  animation: ${appearFromTop} 1s;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  padding: 10px 10px 10px 10px;
  border-radius: 10px;
  text-align: center;
  transition: transform 300ms ease 100ms;
  cursor: pointer;
  background-color: white;
  &:hover {
    transform: translateX(-25%);
    transform: scale(1.7);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
  p {
    width: 180px;
    font-size: 12px;
  }
  img {
    width: 200px;
    border-radius: 10px;
  }
  h3 {
    width: 200px;
  }
`;
