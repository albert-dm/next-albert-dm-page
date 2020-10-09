import React from 'react';
import { CardStyled } from './cardStyled.styles';
import PropTypes from 'prop-types';

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
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string

  
};

export default Card;
