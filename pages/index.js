
import React from 'react';
import clients from './api/clientsList';
import CardContainer from './components/cardContainer';
import Body from './components/body';
import Header from './components/header';

const App = () => {
  return (
    <div>
      <Header/>
      <Body/>
      <CardContainer clients={clients}/>
    </div>
  );
};

export default App;