import React from 'react';
import Card from '../card';
import { CardContainerStyled } from './cardContainerStyled.styles';
import { arrayOf, shape, string} from 'prop-types';

const CardContainer = ({ cards }) => {
  return (
    <CardContainerStyled>
      {cards.map((card) => (
        <Card key={card.title} title={card.title} description={card.description} img={card.img} />
      ))}
    </CardContainerStyled>
  );
};



CardContainer.propTypes = {
  cards: arrayOf(shape({
    title: string,
    description: string,
    img: string
  }))
  
};

export default CardContainer;
