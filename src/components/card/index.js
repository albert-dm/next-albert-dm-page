import React from 'react';
import { CardStyled } from './cardStyled.styles';
import { PropTypes, arrayOf } from 'prop-types';

const Card = ({
  title,
  description,
  img
}) => {
  return (
    <CardStyled>
      <div className="imgWrapper">
        <img src={img} alt={title}></img>
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </CardStyled>
  );
};


Card.propTypes = {
  client : PropTypes.arrayOf({
    name: PropTypes.string,
    items: arrayOf(PropTypes.string)
  })
  
};

export default Card;
