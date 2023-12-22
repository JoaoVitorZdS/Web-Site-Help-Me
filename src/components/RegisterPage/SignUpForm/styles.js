import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 0 auto;
  height: fit-content;
  width: 80vw;
  max-width: 380px;
  background-color: #212529;
  display: flex;
  flex-direction: column;
  padding: 25px;
  gap: 25px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
  }
  label {
    color: #ffffff;
    font-size: 12px;
    font-weight: 300;
  }
  input,
  select {
    background-color: #343b41;
    border: transparent;
    color: #ffffff;
    height: 40px;
    border-radius: 4px;
    padding-left: 10px;
  }

  button {
    background-color: rgba(89, 50, 63, 0.7);
    color: #ffffff;
    height: 40px;
    border: transparent;
    border-radius: 4px;
    padding-left: 10px;
  }

  button:hover {
    background-color: #ff577f;
  }

  p {
    color: #ff577f;
    margin: 0;
  }

  p::before {
    display: inline;
    content: "⚠ ";
  }
`;
