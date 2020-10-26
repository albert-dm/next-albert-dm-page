import React from 'react';
import services from '../data/services';
import BioSection from '../components/bioSection';
import {ServicesSection} from '../components/servicesSection';
import {Header} from '../components/header';
import {Head} from '../components/head';
import ClientsSection from '../components/clientsSection';



const App = () => {
  return (
    <div>
      <Head 
        pageTitle = "albert-dm.dev"
        description = "Software developer portifolio - Albert Dias Moreira"
        siteName = "albert-dm.dev"
      />
      <Header/>
      <BioSection/>
      <ServicesSection services={services} />
      <ClientsSection/>
    </div>
  );
    
};

export default App;




