import { useMarvel } from "../../context";

export const CharList = () => {
  const { characters } = useMarvel();

  return (
    <div>
      <p>Lista de Personagens</p>
      <h1>Personagens</h1>
      {characters.map((info) => {
        return (
          <div>
            <img alt="" src={`${info.thumbnail.path}.jpg`}></img>
            <p>{info.name}</p>
            <div>
              <h4>Quadrinhos</h4>
              <ol>
                {info.comics.items.map((item) => {
                  return (
                    <>
                      <li>{item.name}</li>
                    </>
                  );
                })}
              </ol>
            </div>
          </div>
        );
      })}
    </div>
  );
};
