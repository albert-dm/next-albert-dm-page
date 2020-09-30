import React from 'react';
import { ClientsContainerStyled } from './clientsContainerStyled.styles';


const ClientsContainer = () => {
  return (
    <ClientsContainerStyled>
      <div className="title">
        {'>'}CLIENTS
      </div>
      <div className="banners">
        <img  src="/planerio.png" className="img"></img>
        <img  src="/ambaya.png" className="img"></img>
        <img  src="/saraiva.png" className="img"></img>
      </div>
    </ClientsContainerStyled>
  );
};




export default ClientsContainer;