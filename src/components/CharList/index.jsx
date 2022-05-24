import { useAuth } from "../../context";

export const CharList = () => {
  const { characters, GetCharacters } = useAuth();
  GetCharacters();
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
