import React from 'react';
import Card from '../card';
import { CardContainerStyled } from './cardContainerStyled.styles';
import { PropTypes} from 'prop-types';

const CardContainer = (props) => {
  return (
    <CardContainerStyled>
      <div className="title">
        {'>'}SERVICES
      </div>
      <div className="cards">
        {props.clients.map((client) => (
          <Card client={client} key={client.name} />
        ))}
      </div>
    </CardContainerStyled>
  );
};



CardContainer.propTypes = {
  clients : PropTypes.arrayOf(PropTypes.client)
  
};

export default CardContainer;
