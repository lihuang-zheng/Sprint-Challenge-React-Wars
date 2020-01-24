import React from "react";
import { Card, CardText, CardBody, CardTitle, Col } from "reactstrap";

function StarCard(props) {
  return (
    <Col xs="12" md="6" xl="3">
      <Card>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardText>Height: {props.height}</CardText>
          <CardText>Hair Color: {props.hairColor}</CardText>
          <CardText>Eye Color: {props.eyeColor}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
}

export default StarCard;
