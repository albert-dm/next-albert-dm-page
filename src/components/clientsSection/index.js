import React from 'react';
import { ClientsSectionStyled } from './clientsSectionStyled.styles';
import { Container } from '../container';


const ClientsSection = () => {
  return <Container dar>
    <ClientsSectionStyled>
      <h2>{'>'}CLIENTS </h2>
      <div className="banners">
        <img  src="/planerio.png" alt = "logo Planerio" ></img>
        <img  src="/ambaya.png" alt = "logo Ambaya"></img>
        <img  src="/saraiva.png" alt = "logo Saraiva" ></img>
      </div>
    </ClientsSectionStyled>
  </Container>;
   
  
};


export default ClientsSection;