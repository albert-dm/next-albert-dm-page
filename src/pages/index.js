import React from 'react';
import services from '../data/services';
import BioSection from '../components/bioSection';
import {ServicesSection} from '../components/servicesSection';
import Header from '../components/header';
import Head from '../components/head';
import ClientsSection from '../components/clientsSection';


// import { ServicesSection } from '../components/servicesSection';

const App = () => {
  return (
    <div>
      <Head 
        pageTitle = "Albert Software Developer"
        description = "Home page to show all work developed by myself"
        siteName = "Albert-dm.dev"
      />
      <Header/>
      <BioSection/>
      <ServicesSection services={services} />
      <ClientsSection/>
    </div>
  );
    
};

export default App;




