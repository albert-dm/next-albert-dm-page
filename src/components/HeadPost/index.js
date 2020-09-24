import React from 'react';
import { HeadPostStyled } from './headPost.styled';
import { PropTypes} from 'prop-types';


export const HeadPost = ({meta}) => (

  <HeadPostStyled>
    <h1>{meta}</h1>
  
  </HeadPostStyled>
  

);


