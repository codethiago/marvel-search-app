import { useMarvel } from "../../context";
import { useState } from "react";
import React from "react";
import { Card } from "../../components/card";
import { Div, InputBox, Main } from "./styled";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import marvelBG from "../../assets/The_Marvel_Universe.png";

export const Feed = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const { search } = useMarvel();
  const history = useHistory();

  const searchHeroes = (name) => {
    search(name).then((response) => {
      setData(response.data.data.results);
    });
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = () => {
    searchHeroes(value);
  };

  return (
    <Main>
      <span>
        You can find the comics and series what the characters appears
      </span>
      <div>
        <h1 style={{ marginBottom: 60 }}>
          Search for Marvel heroes or villains
        </h1>
        <InputBox>
          <TextField
            type="text"
            value={value}
            placeholder="search"
            onChange={handleChange}
            variant="standard"
            sx={{ width: 300 }}
          />
          <Button onClick={handleClick} style={{ color: "black" }}>
            SEARCH
          </Button>
        </InputBox>
      </div>
      {data && data.length > 0 ? (
        <Div>
          {data.map((hero) => (
            <div
              onClick={() => {
                history.push(`/feed/${hero.name}/${hero.id}`);
              }}
              style={{ cursor: "pointer" }}
            >
              <Card thumbnail={hero.thumbnail} name={hero.name} />
            </div>
          ))}
        </Div>
      ) : (
        <Div>
          <span>
            If you don't get the results
            <br />
            search for relevant words for ex: For Ironman search 'iron'
          </span>
          <img src={marvelBG} alt="" />
        </Div>
      )}
    </Main>
  );
};
