import React from "react";
import styled from "styled-components";
import Section from "./section";

const AboutContainer = styled.div`
  display: flex;
`;

const Picture = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`;

const About = props => (
  <React.Fragment>
    <Section heading="About me" id={props.id}>
      <AboutContainer>
        <Picture
          src="https://img.huffingtonpost.com/asset/5c861ee5250000e203c8bda7.jpeg"
          title="My profile"
        />
        I love politics and code.
      </AboutContainer>
    </Section>
    <div>lsdjngjkrnskl</div>
  </React.Fragment>
);

export default About;
