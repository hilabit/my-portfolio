import React from "react";
import sections from "./componentStructure";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 20px;
  padding: 10px;

  h1 {
    margin: 0;
  }

  ul {
    display: flex;
    list-style: none;
    li {
      margin-right: 10px;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;

const HeaderLink = styled.a`
  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = ({ text }) => (
  <HeaderContainer>
    <h1>{text}</h1>
    <ul>
      {sections.map(section => (
        <li key={section.href}>
          <HeaderLink href={`#${section.href}`}>{section.label}</HeaderLink>
        </li>
      ))}
    </ul>
  </HeaderContainer>
);

export default Header;
