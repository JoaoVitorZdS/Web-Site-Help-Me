import styled from "styled-components";

export const StyledDashboardBody = styled.div`
  height: 100%;
  background-color: transparent;
  margin: 0;
  width: 100vw;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  justify-content: start;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 250px;
    width: 100%;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    color: #ffffff;
  }
  h4 {
    color: rgb(173, 20, 20);
    font-size: 32px;
    font-weight: 800;
  }
  h4::before {
    display: inline;
    content: "⚠ ";
  }
  h2,
  h3 {
    color: #ffffff;
    margin-top: 50px;
    padding-left: 25px;
  }

  @media (max-width: 535px) {
    div {
      flex-direction: column;
      align-items: flex-start;
      padding-left: 25px;
    }
  }
`;
