import React from "react";
import { CardContainer } from "./card.styles";

const SkillsList = (props) => {
  return (
    <div>
      {props.skills.map((skill) => (
        <div className="item" key={skill}>
          {skill}
        </div>
      ))}
    </div>
  );
};

const SkillsCard = (props) => {
  return (
    <CardContainer>
      <div className="content">
        <div className="name">{props.skill.name}</div>
        <div className="description">
          <SkillsList skills={props.skill.skills} />
        </div>
      </div>
    </CardContainer>
  );
};

export default SkillsCard;
