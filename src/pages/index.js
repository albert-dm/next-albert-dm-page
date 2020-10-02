import React from 'react';
import services from '../data/services';
import CardContainer from '../components/cardContainer';
import BioSection from '../components/bioSection';
import {ServicesSection} from '../components/servicesSection';
import Header from '../components/header';
import ClientsContainer from '../components/clientsContainer';


// import { ServicesSection } from '../components/servicesSection';

const App = () => {
  return (
    <div>
      <Header/>
      <BioSection/>
      <ServicesSection services={services} />
      {/* <CardContainer /> */}
      <ClientsContainer/>
    
    </div>
  );
    
};

export default App;




