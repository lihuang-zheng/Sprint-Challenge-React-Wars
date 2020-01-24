import React, { useState, useEffect } from "react";
import axios from "axios";
import StarCard from "./StarCard";
import { Container, Row } from "reactstrap";

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
    <Container>
      <Row>
        {character.map(character => {
          return (
            <StarCard
              key={character.name}
              name={character.name}
              height={character.height}
              hairColor={character.hair_color}
              eyeColor={character.eye_color}
            />
          );
        })}
      </Row>
    </Container>
  );
}

export default StarCharacter;
