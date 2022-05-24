import { API } from "../services";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [hash, setHash] = useState("");
  const [timeStamp, setTimeStamp] = useState("");
  const apiKey = "b20c16f1ac80cb70cecd2ee43e396aaa";
  const [comics, setComics] = useState({});
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    let md5 = require("md5");

    const generateStamp = Math.floor(Date.now() / 1000);
    setTimeStamp(generateStamp);
    setHash(
      md5(
        `${generateStamp}abd7413b31d0e6b498b980639e4f3a04a4b29402b20c16f1ac80cb70cecd2ee43e396aaa`
      )
    );
  }, []);

  const GetCharacters = async () => {
    const responseChar = await API.get(
      `characters?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}`
    );
    setCharacters(responseChar);
  };

  const GetComics = async () => {
    const responseComics = await API.get(
      `comics?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}`
    );
    setComics(responseComics.data.data.results);
  };

  const value = useMemo(() => ({
    comics,
    characters,
    GetComics,
    GetCharacters,
  }));
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext);
