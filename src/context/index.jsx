import { API } from "../services";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import React from "react";

export const MarvelContext = createContext();

export const MarvelProvider = ({ children }) => {
  const search = async (name) => {
    const response = await API.get(
      `characters?nameStartsWith=${name}&ts=1653595365&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=bd86817df6efb607dbea0d8897fecc37&limit=99`
    );
    return response;
  };

  const getChar = async (id) => {
    const response = await API.get(
      `characters/${id}?ts=1653595365&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=bd86817df6efb607dbea0d8897fecc37`
    );
    return response;
  };

  const getComics = async (id) => {
    const response = await API.get(
      `characters/${id}/comics?ts=1653595365&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=bd86817df6efb607dbea0d8897fecc37&limit=99`
    );
    return response;
  };

  const getSeries = async (id) => {
    const response = await API.get(
      `characters/${id}/series?seriesType=collection&ts=1653595365&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=bd86817df6efb607dbea0d8897fecc37&limit=99`
    );
    return response;
  };

  const value = useMemo(() => ({
    search,
    getComics,
    getSeries,
    getChar,
  }));
  return (
    <MarvelContext.Provider value={value}>{children}</MarvelContext.Provider>
  );
};
export const useMarvel = () => useContext(MarvelContext);
