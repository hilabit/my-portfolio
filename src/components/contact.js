import React from "react";
import Section from "./section";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 350px;
  padding: 10px 0;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;
const Input = styled.input`
  font-size: 16px;
  width: 250px;
  border: 1px solid ${props => (!props.error ? `#ccc` : `red`)};
  border-radius: 5px;
  padding: 5px;
`;

const TextArea = styled.textarea`
  font-size: 16px;
  width: 250px;
  padding: 5px;
  border: 1px solid ${props => (!props.error ? `#ccc` : `red`)};
  border-radius: 5px;
`;

const Select = styled.select`
  font-size: 16px;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Submit = styled.input`
  font-size: 18px;
  padding: 5px;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Error = styled.div`
  color: red;
  font-size: 12px;
`;

const reasons = ["Project request", "Bug report", "Miscellaneous"];

class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    reason: "",
    valid: false,
    validationErrors: {}
  };

  checkIfValid = () => {
    this.setState(({ name, email, message }) => ({
      valid: name && email && message,
      validationErrors: {
        name: name ? null : "Name is required",
        email: email ? null : "Email is required",
        message: message ? null : "Message is required"
      }
    }));
  };

  render() {
    const { validationErrors } = this.state;
    return (
      <Section heading="Contact" id="contact">
        {this.props.phoneNumber} - email: {this.props.email}
        <form
          onSubmit={event => {
            event.preventDefault();
            console.log("form state: ", this.state);
          }}
        >
          <FormContainer>
            <div>
              <Label>
                Name:
                <Input
                  /*className={validationErrors.name ? "input error": "input"}*/
                  error={validationErrors.name}
                  value={this.state.name}
                  onChange={event => {
                    this.setState({ name: event.target.value });
                  }}
                  onBlur={this.checkIfValid}
                />
                {validationErrors.name && (
                  <Error>{validationErrors.name}</Error>
                )}
              </Label>
            </div>
            <div>
              <Label>
                Email address:
                <Input
                  error={validationErrors.email}
                  value={this.state.email}
                  type="email"
                  onChange={event => {
                    this.setState({ email: event.target.value });
                  }}
                  onBlur={this.checkIfValid}
                />
                {validationErrors.email && (
                  <Error>{validationErrors.email}</Error>
                )}
              </Label>
            </div>
            <div>
              <Label>
                Message:
                <TextArea
                  error={validationErrors.message}
                  value={this.state.message}
                  rows={6}
                  onChange={event => {
                    this.setState({ message: event.target.value });
                  }}
                  onBlur={this.checkIfValid}
                />
                {validationErrors.message && (
                  <Error>{validationErrors.message}</Error>
                )}
              </Label>
            </div>
            <div>
              <Label>
                Reason:
                <Select
                  value={this.state.reason}
                  onChange={event =>
                    this.setState({ reason: event.target.value })
                  }
                >
                  {reasons.map(reason => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </Select>
              </Label>
            </div>
            <ActionContainer>
              <Submit type="submit" disabled={!this.state.valid} />
            </ActionContainer>
          </FormContainer>
        </form>
      </Section>
    );
  }
}

export default Contact;
