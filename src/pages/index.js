
import React from 'react';
import clients from './api/clientsList';
import CardContainer from '../components/cardContainer';
import BioSection from '../components/bioSection';
import Header from '../components/header';

const App = () => {
  return (
    <div>
      <BioSection/>
      <CardContainer clients={clients}/>
    </div>
  );
};

export default App;