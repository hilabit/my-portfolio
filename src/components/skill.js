import React from "react";
import styled from "styled-components";

const SkillItem = styled.div`
  border: 3px solid white;
  border-radius: 50%;
  color: ${props => props.color};
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  flex-shrink: 0;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.75);
`;

const SkillIcon = styled.div`
  font-size: 50px;
`;

const Skill = props => {
  const { icon, name, children } = props;

  return (
    <SkillItem color={props.color}>
      <SkillIcon>{icon}</SkillIcon>
      <h2>{name}</h2>
      {children}
    </SkillItem>
  );
};

export default Skill;
