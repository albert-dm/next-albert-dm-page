import React from 'react';
import { shallow } from 'enzyme';
import Header from '../pages/components/header/index';
describe('Fazendo testes no Next.JS com Enzyme', () => {
    it('Deve conter o texto ">albert-dm.dev" dentro do componente Header', () => {
        const app= shallow (<Header/>);
        expect(app.find("div").text()).toEqual(">albert-dm.dev");
    });
});



  