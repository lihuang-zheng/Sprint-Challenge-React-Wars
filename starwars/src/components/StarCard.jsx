import React from "react";
import styled from "styled-components";

const StarList = styled.div`
  padding: 4% 0;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid red;
`;

const StarName = styled.h3`
  border: 1px solid red;
`;

function StarCard(props) {
  return (
    <StarList>
      <StarName>{props.name}</StarName>
    </StarList>
  );
}

export default StarCard;
