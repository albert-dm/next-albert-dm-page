
import React from 'react';
import clients from './api/clientsList';
import CardContainer from '../components/cardContainer';
import BioSection from '../components/bioSection';
// import { ServicesSection } from '../components/servicesSection';

const App = () => {
  return (
    <div>
      <BioSection/>
      {/* <ServicesSection /> */}
      <CardContainer clients={clients}/>
    </div>
  );
};

export default App;