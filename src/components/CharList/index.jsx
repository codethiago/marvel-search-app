import { useEffect } from "react";
import { useMarvel } from "../../context";

export const CharList = () => {
  const { characters, GetCharacters } = useMarvel();
  useEffect(() => {
    GetCharacters();
  }, []);
  console.log(characters);

  return (
    <>
      <h1>
        Characthers
        {/* {characters &
          characters.map((info) => {
            return (
              <>
                <p>{info.name}</p>;
              </>
            );
          })} */}
      </h1>
    </>
  );
};
