import { Main } from "./style";

export const Footer = () => {
  return (
    <Main>
      <p>
        Data provided by Marvel. © 2022{" "}
        <a
          style={{ textDecoration: "none" }}
          href="https://developer.marvel.com/"
        >
          MARVEL
        </a>
        <br />
        Developed by{" "}
        <a
          style={{ textDecoration: "none" }}
          href="https://github.com/codethiago"
        >
          Thiago Brandão
        </a>
      </p>
    </Main>
  );
};
