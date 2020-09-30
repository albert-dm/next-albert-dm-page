import React from 'react';
import { CardStyled } from './cardStyled.styles';
import { PropTypes, arrayOf } from 'prop-types';

const CardList = (props) => {
  return (props.items.map((item) => (
    <div className="item" key={item}>
      {item}
    </div>
  ))
  );
};


const Card = (props) => {
  return (
    <CardStyled>
      <div className="content">
        <div className="name">{props.client.name}</div>
        <img  src={props.client.img} className="img"></img>
        <div className="description">
          <CardList items={props.client.items} />
        </div>
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
