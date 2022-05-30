import { useMarvel } from "../../context";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loadingMarvel from "../../assets/gif-marvel-91.gif";
import { Container, Div, Main } from "./styles";

export const ComicsPage = () => {
  const { getComics } = useMarvel();
  const { id } = useParams();
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getComics(id).then((res) => {
      setComics(res.data.data.results);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <h1>Comics</h1>
      {loading ? (
        <div>
          <img src={loadingMarvel} alt="" />
          <p>Loading...</p>
        </div>
      ) : (
        <Main>
          {comics.map((comic) => {
            const image = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
            return (
              <Div>
                <img src={image} alt={`Cover from ${comic.title}`} />
                <p>{comic.title}</p>
              </Div>
            );
          })}
        </Main>
      )}
      <span>
        {(loading === false) & (comics.length === 0)
          ? "This character have no comics"
          : "You can buy these comics in oficial Marvel site!"}
      </span>
    </Container>
  );
};
