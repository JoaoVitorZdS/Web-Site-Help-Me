import React from "react";
import { StyledQuizContainer } from "./style";
import { Footer } from "../../components/Footer/Footer";

import { Header } from "../../components/Header/Header";
import Quiz from "../../components/Quiz";


const QuizPage = () => {

  return (
    <div>
        <StyledQuizContainer>
          <Header/>
          <Quiz />
          <Footer/>
        </StyledQuizContainer>
    </div>
  );
};

export default QuizPage;
