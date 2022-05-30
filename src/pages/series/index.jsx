import React, { useEffect, useState } from "react";
import loadingMarvel from "../../assets/gif-marvel-91.gif";
import { useMarvel } from "../../context";
import { useParams } from "react-router-dom";
import { Div, Main } from "./styles";
import { Container } from "../ComicsPage/styles";

export const Series = () => {
  const { getSeries } = useMarvel();
  const { id } = useParams();
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSeries(id).then((res) => {
      setSeries(res.data.data.results);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <h1>Series</h1>

      {loading ? (
        <div>
          <img src={loadingMarvel} alt="Loading" />
          <p>Loading...</p>
        </div>
      ) : (
        <Main>
          {series.map((serie) => {
            const image = `${serie.thumbnail.path}.${serie.thumbnail.extension}`;
            return (
              <Div>
                <img src={image} alt="" />
                <p>{serie.title}</p>
              </Div>
            );
          })}
        </Main>
      )}
      <h1>{series === 0 && "Oops, No series on this character"}</h1>
    </Container>
  );
};
