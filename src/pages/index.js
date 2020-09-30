import React from 'react';
import clients from './api/clientsList';
import CardContainer from '../components/cardContainer';
import BioSection from '../components/bioSection';
import Header from '../components/header';
import ClientsContainer from '../components/clientsContainer';


// import { ServicesSection } from '../components/servicesSection';

const App = () => {
  return (
    <div>
      <Header/>
      <BioSection/>
      <CardContainer clients={clients}/>
      <ClientsContainer/>
    
    </div>
  );
    
};

export default App;




