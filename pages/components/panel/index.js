import React from 'react';
import PortfolioCard from '../card';
import { PanelContainer } from './panel.styles';




const Panel = () =>{
    return (
        <PanelContainer>
            <h1 className="ui center aligned basic segment">Skills</h1>
            <div className="ui centered raised cards">
                <SkillsCard skills = {frontend} />
                <SkillsCard skills = {backend} />
                <SkillsCard skills = {gameDev} />
            </div>
        </PanelContainer>
        
    );
export default Panel;

}

