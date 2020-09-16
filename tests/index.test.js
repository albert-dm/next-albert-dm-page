import React from 'react';
import { shallow } from 'enzyme';
import Header from '../pages/components/header/index';
import Body from '../pages/components/body/index';

describe('Fazendo testes no Next.JS com Enzyme', () => {
    it('Shoud have the text ">albert-dm.dev" inside the component Header', () => {
        const app= shallow (<Header/>);
        expect(app.find("div").text()).toEqual(">albert-dm.dev");
    });

    it('houd have the text ">DEV" inside the component Body', () => {
        const app= shallow (<Body/>);
        expect(app.find(".title").text()).toEqual(">DEV");
    });

    it('Shoud have the text "Software Developer and Automation Engineer Building applications that suits your business Web, Mobile, Desktop and even IoT" inside the component Body', () => {
        const app= shallow (<Body/>);
        expect(app.find(".description").text()).toEqual("Software Developer and Automation Engineer Building applications that suits your business Web, Mobile, Desktop and even IoT");
    });

    it('Shoud have the text "Software Developer and Automation Engineer Building applications that suits your business Web, Mobile, Desktop and even IoT" inside the component Body', () => {
        const app= shallow (<Body/>);
        expect(app.find(".descriptionTwo").text()).toEqual("Any buisiness can and needs to be digital and in the web. If you want to talk about it, fell free to contact me!");
    });
    it('Make sure that the link triggers the linkedin page', () => {
        const app= shallow (<Body/>);
        expect(app.find("a").at(0).prop("href")).toEqual("https://www.linkedin.com/in/albert-moreira-62b9272b/");
    });
    it('Make sure that the link triggers the github page', () => {
        const app= shallow (<Body/>);
        expect(app.find("a").at(1).prop("href")).toEqual("https://github.com/albert-dm");
    });
   

});







  