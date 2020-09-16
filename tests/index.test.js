import React from 'react';
import { mount } from 'enzyme';
import Header from '../pages/index';
describe('Fazendo testes no Next.JS com Enzyme', () => {
    it('Deve conter o texto ">DEV" dentro de um H1 no componente Index', () => {
        const wrap = mount(<Header/>);
        expect(wrap.find('h1').text()).toEqual('>DEV');
    });
});


