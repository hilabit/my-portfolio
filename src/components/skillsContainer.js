import React from "react";
import Skill from "./skill";
import { FaHtml5, FaJs, FaCss3Alt } from "react-icons/fa";
import styled from "styled-components";
import Section from "./section";

const standardPadding = 50;

const MyInput = styled.input`
  color: black;
  padding: 5px;
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: ${standardPadding}px;
`;

const MoreInfo = styled.button`
  background: pink;
  &:hover {
    cursor: pointer;
  }
`;

const MoreInfoParagraph = styled.div``;

class SkillsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMoreInfoHTML: false,
      newInput: "",
      color: "green"
    };
    this.toggleShowMoreInfo = this.toggleShowMoreInfo.bind(this);
  }
  toggleShowMoreInfo() {
    this.setState({
      showMoreInfoHTML: !this.state.showMoreInfoHTML
    });
  }

  handleChange(e) {
    this.setState({
      newInput: e.target.value
    });
  }
  render() {
    return (
      <Section heading="Skills" id="skills">
        <button onClick={() => this.setState({ color: "purple" })}>
          colorit
        </button>

        <SkillsList>
          <MyInput
            name="myInput"
            placeholder="First text"
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <div>{this.state.newInput}</div>
          <Skill color={this.state.color} name="HTML" icon={<FaHtml5 />}>
            expert
            <MoreInfo
              onClick={() => {
                this.toggleShowMoreInfo();
              }}
            >
              More...
            </MoreInfo>
            {this.state.showMoreInfoHTML ? (
              <MoreInfoParagraph>
                I love learning Html and event handlers!
              </MoreInfoParagraph>
            ) : null}
          </Skill>
          <Skill color="orange" name="CSS" icon={<FaCss3Alt />}>
            newbie
          </Skill>
          <Skill
            color="blue"
            name="Javascript"
            icon={<FaJs />}
            children="intermediate"
          />
        </SkillsList>
      </Section>
    );
  }
}

export default SkillsContainer;
