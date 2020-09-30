import React from 'react';
import { HeadPostStyled } from './headPost.styled';



export const HeadPost = ({meta}) => (

  <HeadPostStyled>
    <div className = "group">
      <h2>{'>' + meta.title}</h2>
      <p>{meta.description}</p>
      <span>{meta.date} {'- '+ meta.readTime +' min read'}</span>    
    </div>
  </HeadPostStyled>
  

);


