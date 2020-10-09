import React from 'react';
import services from '../data/services';
import BioSection from '../components/bioSection';
import {ServicesSection} from '../components/servicesSection';
import Header from '../components/header';
import ClientsSection from '../components/clientsSection';


// import { ServicesSection } from '../components/servicesSection';

const App = () => {
  return (
    <div>
      <Header/>
      <BioSection/>
      <ServicesSection services={services} />
      <ClientsSection/>
    
    </div>
  );
    
};

export default App;




