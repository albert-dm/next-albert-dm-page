import React from 'react';
import { shallow } from 'enzyme';
import Header from '../src/components/header/index';
import BioSection from '../src/components/bioSection/index';

describe('Fazendo testes no Next.JS com Enzyme', () => {
  it('Shoud have the text ">albert-dm.dev" inside the component Header', () => {
    const app= shallow (<Header/>);
    expect(app.find('h1').text()).toEqual('>albert-dm.dev');
  });

  it('houd have the text ">DEV" inside the component BioSection', () => {
    const app= shallow (<BioSection/>);
    expect(app.find('h2').text()).toEqual('>dev');
  });

  it('Shoud have the text 4 lines of description inside the component BioSection', () => {
    const app= shallow (<BioSection/>);
    expect(app.find('p').length).toEqual(4);
  });
  it('Make sure that the link triggers the linkedin page', () => {
    const app= shallow (<BioSection/>);
    expect(app.find('a').at(0).prop('href')).toEqual('https://www.linkedin.com/in/albert-moreira-62b9272b/');
  });
  it('Make sure that the link triggers the github page', () => {
    const app= shallow (<BioSection/>);
    expect(app.find('a').at(1).prop('href')).toEqual('https://github.com/albert-dm');
  });
   

});







  