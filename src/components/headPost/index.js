import React from 'react';



export const HeadPost = ({meta}) => (
  <div>
    <h3>{'>' + meta.title}</h3>
    <p>{meta.description}</p>
    <span>by {meta.author}
      <br />
      {meta.date}</span>    
  </div>
);


