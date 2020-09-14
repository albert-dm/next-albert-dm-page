import React from 'react';
import { CardStyled } from './cardStyled.styles';

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
        <div className="description">
          <CardList items={props.client.items} />
        </div>
      </div>
    </CardStyled>
  );
};

export default Card;
