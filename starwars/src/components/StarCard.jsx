import React from "react";
import { Card, CardText, CardBody, CardTitle, Col } from "reactstrap";

const titleStyle = {
  fontSize: "2rem"
};

const cardStyle = {
  border: "1px solid red"
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
