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
  gap: 15px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #868e96;
    height: 40px;
    border: transparent;
    border-radius: 4px;
    padding-left: 10px;
  }
  p:hover {
    background-color: #868e9660;
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
    background-color: #ff577f60;
    color: #ffffff;
    height: 40px;
    border: transparent;
    border-radius: 4px;
    padding-left: 10px;
  }

  button:hover {
    background-color: #ff577f;
  }

  span {
    color: #ff577f;
    margin: 0;
  }

  span::before {
    display: inline;
    content: "⚠ ";
  }
`;
