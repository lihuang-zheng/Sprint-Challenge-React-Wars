import React from "react";
import { Card, CardText, CardBody, CardTitle, Col } from "reactstrap";

const titleStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold"
};

const cardStyle = {
  width: "200px",
  height: "250px",
  margin: "4%",
  boxShadow: "1px 5px 10px gray"
};

function StarCard(props) {
  return (
    <Col xs="12" md="6" xl="3">
      <Card style={cardStyle}>
        <CardBody>
          <CardTitle style={titleStyle}>{props.name}</CardTitle>
          <CardText>Height: {props.height}</CardText>
          <CardText>Hair Color: {props.hairColor}</CardText>
          <CardText>Eye Color: {props.eyeColor}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
}

export default StarCard;
