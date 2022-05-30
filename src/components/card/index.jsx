import React from "react";
import { Div } from "./style";

export const Card = ({ thumbnail, name }) => {
  const image = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <Div>
      <img src={image} alt={name} />
      <p> {name} </p>
    </Div>
  );
};
