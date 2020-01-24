import React, { useState, useEffect } from "react";
import axios from "axios";
import StarCard from "./StarCard";

function StarCharacter() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people`)
      .then(response => {
        console.log(response.data);
        setCharacter(response.data.results);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);
  return (
    <div className="character">
      <img src={StarWarsCharPic1} alt="Luke Skywalker" />
      <img src={StarWarsCharPic2} alt="C3PO" />
      <img src={StarWarsCharPic3} alt="R2D2" />
      <img src={StarWarsCharPic1} alt="Darth Vader" />
      <img src={StarWarsCharPic2} alt="Leia Organa" />
      <img src={StarWarsCharPic3} alt="Owen Lars" />
      <img src={StarWarsCharPic1} alt="Beru Whitesun lars" />
      <img src={StarWarsCharPic3} alt="R5-D4" />
      <img src={StarWarsCharPic2} alt="Biggs Darklighter" />
      <img src={StarWarsCharPic3} alt="Obi-Wan Kenobi" />

      {character.map(character => {
        return <StarCard key={character.id} name={character.name} />;
      })}
    </div>
  );
}

export default StarCharacter;
