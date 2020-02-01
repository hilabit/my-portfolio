import React from "react";
import GitHubCommit from "./GitHubCommit";
import Section from "../section";
import axios from "axios";

class GitHub extends React.Component {
  state = {
    username: "herrherrmann",
    commits: null
  };
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.username}/events`)
      .then(response => {
        const commits = response.data.filter(data => data.type === "PushEvent");
        this.setState({
          commits
        });
      });
  }
  render() {
    return (
      <Section heading="GitHub Commits" id={this.props.id}>
        {this.state.commits &&
          this.state.commits.map(commit => (
            <GitHubCommit
              key={commit.id}
              header={commit.actor.login}
              image={commit.actor.avatar_url}
              commitMessage={commit.payload.commits[0].message}
              username={commit.actor.display_login}
            />
          ))}
      </Section>
    );
  }
}

export default GitHub;
