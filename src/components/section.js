import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  margin: 20px 20px 50px 20px;
  padding: 20px;
  border: 1px solid silver;
`;

const Heading = styled.h1`
  margin: 0 0 10px 0;
`;

const Section = ({ heading, children, id }) => (
  <SectionContainer id={id}>
    <Heading>{heading}</Heading>
    {children}
  </SectionContainer>
);

export default Section;
