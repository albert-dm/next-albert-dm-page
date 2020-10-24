import React from 'react';
import { ClientsSectionStyled } from './clientsSectionStyled.styles';



const ClientsSection = () => {
  return<ClientsSectionStyled>
    <h2>{'>'}CLIENTS </h2>
    <ul>
      <li><a href="https://planerio.de/"><img src="/planerio.png"  alt="logo da empresa planerio"/></a></li>
      <li><a href="https://ambaya.com.br"><img src="/ambaya.png"  alt="logo da loja ambaya semijoias"/></a></li>
      <li><a href="https://www.saraivaeducacao.com.br/"><img src="/saraiva.png"  alt="logo da saraiva educacao"/></a></li>
    </ul>
  </ClientsSectionStyled>;

   
  
};


export default ClientsSection;