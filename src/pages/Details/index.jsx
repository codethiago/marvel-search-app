import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useMarvel } from "../../context";
import { Div, Main, Redirect } from "./style";

export const Details = () => {
  const { getChar } = useMarvel();
  const { id, name } = useParams();
  const [chars, setChars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getChar(id).then((res) => {
      setChars(res.data.data.results);
      setLoading(false);
    });
  }, []);

  return (
    <Main>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {chars.map((char) => {
            const image = `${char.thumbnail.path}.${char.thumbnail.extension}`;
            return (
              <Div>
                <img src={image} alt="" />
                <div>
                  <h1>{name}</h1>
                  {char.description.length === 0 ? (
                    <p>This characters has no description</p>
                  ) : (
                    <p>{char.description}</p>
                  )}
                  <Redirect>
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to={`/feed/${name}/${id}/comics`}
                    >
                      <h2>COMICS</h2>
                    </Link>
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to={`/feed/${name}/${id}/series`}
                    >
                      <h2>SERIES</h2>
                    </Link>
                  </Redirect>
                </div>
              </Div>
            );
          })}
        </div>
      )}
    </Main>
  );
};
