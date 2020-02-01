import React from "react";
import styled from "styled-components";

const imageSize = "16px";

const Container = styled.div`
  display: grid;
  grid-template-columns: ${imageSize} 150px auto;
  grid-gap: 5px;
  margin-bottom: 3px;
  img {
    width: ${imageSize};
    height: ${imageSize};
    border-radius: 50%;
  }
`;

const GitHubCommit = props => {
  return (
    <Container>
      <img src={props.image} alt={props.username + " avatar"} />
      <strong>{props.header}</strong>
      <div>{props.commitMessage}</div>
    </Container>
  );
};

export default GitHubCommit;
