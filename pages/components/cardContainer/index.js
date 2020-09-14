import React from 'react';
import Card from '../card';
import { CardContainerStyled } from './cardContainerStyled.styles';

const CardContainer = (props) => {
  return (
    <CardContainerStyled>
      <div className="title">
        {'>'}CLIENTS
      </div>
      <div className="cards">
        {props.clients.map((client) => (
          <Card client={client} key={client.name} />
        ))}
      </div>
    </CardContainerStyled>
  );
};

export default CardContainer;
