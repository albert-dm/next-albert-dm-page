import React from "react";
import SkillsCard from "../card";
import { CardContainer } from "./cardContainer.styles";

const SkillsContainer = (props) => {
  return (
    <CardContainer>
      <div className="title">
        CLIENTS
      </div>
      <div className="cards">
      {props.skills.map((skill) => (
        <SkillsCard skill={skill} />
      ))}
      </div>
    </CardContainer>
  );
};

export default SkillsContainer;
