import { API } from "../services";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const MarvelContext = createContext();

export const MarvelProvider = ({ children }) => {
  const [hash, setHash] = useState("");
  const [timeStamp, setTimeStamp] = useState("");
  const apiKey = "7fda74fc35c2561abc4a43fc02eda15e";
  const [comics, setComics] = useState({});
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    let md5 = require("md5");
    const generateStamp = Math.floor(Date.now() / 1000);
    setTimeStamp(generateStamp);
    setHash(
      md5(
        `${generateStamp}f97429388fb6981ed372948b48815a062ae8588b7fda74fc35c2561abc4a43fc02eda15e`
      )
    );
  }, []);

  const GetCharacters = async (timeStamp, hash) => {
    const responseChar = await API.get(
      `characters?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}&limit=60`
    );
    setCharacters(responseChar.data.data.results);
    console.log(responseChar.data.data.results);
  };

  const GetComics = async (timeStamp, hash) => {
    const responseComics = await API.get(
      `comics?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}`
    );
    setComics(responseComics.data.data.results);
  };

  useEffect(() => {
    if (timeStamp && hash) {
      GetCharacters(timeStamp, hash);
      GetComics(timeStamp, hash);
    }
  }, [timeStamp, hash]);

  const value = useMemo(() => ({
    comics,
    characters,
    GetComics,
    GetCharacters,
  }));
  return (
    <MarvelContext.Provider value={value}>{children}</MarvelContext.Provider>
  );
};
export const useMarvel = () => useContext(MarvelContext);
