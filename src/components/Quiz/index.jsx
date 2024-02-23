import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import cornerFlower from"../../assets/imgs/cornerFlower.png"
import cornerFlowerBtmLft from"../../assets/imgs/cornerFlowerBtmLft.png"
import cornerFlowerBtmRgt from"../../assets/imgs/cornerFlowerBtmRgt.png"
import cornerFlowerTopRgt from"../../assets/imgs/cornerFlowerTopRgt.png"
import GlobalStyleDefault from '../../GlobalStyles';
const questions = [
    {
        question: "Qual a sua idade?",
        options: ["até 30 anos", "até 40 anos", "até 50 anos", "até 60 anos"],
        answer: 1
    },
    {
        question: "Qual é a duração média do ciclo menstrual?",
        options: ["21 dias", "28 dias", "35 dias", "42 dias"],
        answer: 1
    },
    // Adicione mais perguntas conforme necessário
];

const slideIn = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
`;

const slideOut = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
`;


const QuizContainer = styled.div`
    max-width: 600px;
    width: 330px ;
    height: fit-content;
   

    background-color: ${GlobalStyleDefault.colors.secondary};
    border: 1px solid #5a235f;
    border-radius: 15px;
    box-shadow: ${GlobalStyleDefault.shadows.large}, inset 0 0 10px rgba(62, 62, 62, 0.8);
    text-align: center;
    position: relative;
    overflow: hidden;
    z-index: 3;
    
    

    h1{
        color: ${GlobalStyleDefault.colors.textwhite};
        font-family: DolceVita;
    }

    

   
`;

const TesteNameContainer = styled.div `

width: 100;

`
const TesteNameContainer2 = styled.div `

transform: rotate(180deg);


`
const TesteNameContainer3 = styled.div `

width: 100;

`
const TesteNameContainer4 = styled.div `

width: 100;

`
const FlowerContainer = styled.div`
    position: relative;
   
    width: 80% ;
    height: 80%;
    background-color: ${GlobalStyleDefault.colors.tertiary};
    border-radius: 15px 430px 15px 450px;
    text-align: center;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    box-shadow: 6px 18px 19px rgba(0, 0, 0, 0.6), inset 0 -13px 27px rgba(93, 62, 91, 80.9);
    &:hover{
        animation: zoom 1.5s linear;
    }
        @keyframes zoom {
  0%, 100%{
    scale: 1;
  }
  50% {
    scale: 1.1;
  }
}
   
`;
const FlowerContainer2 = styled.div`
    position: relative;
    width: 80% ;
    height: 80%;
    background-color: ${GlobalStyleDefault.colors.tertiary};
    transform: rotate(-180deg);
    border-radius: 430px 15px 450px 15px;
    text-align: center;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    box-shadow: 3px -16px 19px rgba(0, 0, 0, 0.6), inset 0 10px 27px rgba(93, 62, 91, 80.9);
    &:hover{
        animation: zoom 1.5s linear;
        transform: rotate(180deg);
    }
        @keyframes zoom {
  0%, 100%{
    scale: 1;
  }
  50% {
    scale: 1.1;
  }
} 
`;
const FlowerContainer3 = styled.div`
    position: relative;
    width: 80% ;
    height: 80%;
    background-color: ${GlobalStyleDefault.colors.tertiary};
    //transform: rotate(180deg);
    border-radius: 430px 15px 450px 15px;
    text-align: center;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    box-shadow: 3px -16px 19px rgba(0, 0, 0, 0.6), inset 0 10px 27px rgba(93, 62, 91, 80.9);
    &:hover{
        animation: zoom 1.5s linear;
       // transform: rotate(180deg);
    }
        @keyframes zoom {
  0%, 100%{
    scale: 1;
  }
  50% {
    scale: 1.1;
  }
} 
`;
const FlowerContainer4 = styled.div`
    position: relative;
    width: 80% ;
    height: 80%;
    background-color: ${GlobalStyleDefault.colors.tertiary};
    //transform: rotate(-90deg);
    border-radius: 15px 430px 15px 450px;
    text-align: center;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    box-shadow: 3px -16px 19px rgba(0, 0, 0, 0.6), inset 0 10px 27px rgba(93, 62, 91, 80.9);
    &:hover{
        animation: zoom 1.5s linear;
        //transform: rotate(-90deg);
    }
        @keyframes zoom {
  0%, 100%{
    scale: 1;
  }
  50% {
    scale: 1.1;
  }
} 
`;


const SlideWrapper = styled.div`
    display: flex;
    width: ${(props) => props.width}px;
`;

const SlideContainer = styled.div`
display: flex;
flex-direction: column;
    flex: 1;
    animation: ${(props) => (props.slideIn ? slideIn : slideOut)} 0.5s forwards;
`;

const Question = styled.div`
    margin-bottom: 20px;
`;

const Options = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;

`;

const OptionButton = styled.button`
    margin: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 15px;
    width: 80%;
`;

const Result = styled.div`
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
`;

const ProfessionalsOption = styled.div`
    margin-top: 20px;
    width: 100%;
    
`;

const ProfessionalButton = styled.button`
    margin: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 15px;
    width: 80%;
`;

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [slideIn, setSlideIn] = useState(true);
    const [showProfessionalsOption, setShowProfessionalsOption] = useState(false);
    const [professionals, setProfessionals] = useState([]);
    const [selectedProfessional, setSelectedProfessional] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfessionals = async () => {
            try {
                const db = getFirestore();
                const psychologistsCollection = collection(db, 'psychologist');
                const psychologistsSnapshot = await getDocs(psychologistsCollection);
                const psychologistsData = psychologistsSnapshot.docs.map(doc => doc.data());
                const lawyersCollection = collection(db, 'lawyers');
                const lawyersSnapshot = await getDocs(lawyersCollection);
                const lawyersData = lawyersSnapshot.docs.map(doc => doc.data());
                setProfessionals([...psychologistsData, ...lawyersData]);
            } catch (error) {
                console.error('Erro ao obter profissionais do Firestore:', error);
            }
        };

        fetchProfessionals();
    }, []);

    const handleAnswer = (index) => {
        if (index === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
        setSlideIn(false);
    };

    const resetSlide = () => {
        setSlideIn(true);
    };

    const handleShowProfessionalsOption = () => {
        setShowProfessionalsOption(true);
    };

    const handleSelectProfessional = (professional) => {
        setSelectedProfessional(professional);
        navigate(`/consultation/${professional.name}`);
    };

    return (
        <>
       
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", backgroundColor: `${GlobalStyleDefault.colors.secondary}`, width: "100%", height: "100%", position: "relative", alignItems: "center", justifyItems: "center", boxShadow: `${GlobalStyleDefault.shadows.large}, inset 0 0 10px rgba(62, 62, 62, 0.8)`}}>

        <FlowerContainer>
            <img src={cornerFlower} alt="" className='leftCornerFlower' style={{position: "absolute", height: "auto", width: "43%", top: 0, left: 0,zIndex: -1}} />
            <img src={cornerFlowerBtmLft} alt="" className='leftCornerFlower' style={{position: "absolute", height: "auto", width: "43%", bottom: 0, right: 0,zIndex: -1}} />
            <QuizContainer>
            <h1>Quiz de Saúde Feminina</h1>
            {currentQuestion < questions.length && (

            <SlideWrapper width={questions.length * 350}>
                {questions.map((q, index) => (
                    <SlideContainer key={index} slideIn={slideIn}>
                        <Question>{q.question}</Question>
                        <Options>
                            {q.options.map((option, optionIndex) => (
                                <OptionButton key={optionIndex} onClick={() => handleAnswer(optionIndex)}>
                                    {option}
                                </OptionButton>
                            ))}
                        </Options>
                    </SlideContainer>
                ))}
            </SlideWrapper>
            )}
            {currentQuestion === questions.length && (
                <>
                    <Result>
                        Você acertou {score} de {questions.length} perguntas.
                    </Result>
                    {!showProfessionalsOption && (
                        <ProfessionalsOption>
                            <button onClick={handleShowProfessionalsOption}>Ver profissionais disponíveis</button>
                        </ProfessionalsOption>
                    )}
                    {showProfessionalsOption && (
                        <ProfessionalsOption>
                            <h3>Profissionais Disponíveis:</h3>
                            {professionals.map((professional, index) => (
                                <ProfessionalButton key={index} onClick={() => handleSelectProfessional(professional)}>
                                    {professional.name}
                                </ProfessionalButton>
                            ))}
                        </ProfessionalsOption>
                    )}
                </>
            )}
        </QuizContainer>
        </FlowerContainer>
        <FlowerContainer2>
            <img src={cornerFlowerBtmRgt} alt="" className='leftCornerFlower' style={{position: "absolute", height: "auto", width: "43%", bottom: 0, left: 0,zIndex: -1}} />
            <img src={cornerFlowerTopRgt} alt="" className='leftCornerFlower' style={{position: "absolute", height: "auto", width: "43%", top: 0, right: 0,zIndex: -1}} />
            <TesteNameContainer2>
                <h3>Teste de personalidade</h3>
                <p>Um teste rápido para</p>
                    <p> se entender melhor!</p>
            </TesteNameContainer2>
        </FlowerContainer2>
        <FlowerContainer3>
            <img src={cornerFlowerBtmRgt} alt="" className='leftCornerFlower' style={{position: "absolute", height: "auto", width: "43%", bottom: 0, left: 0,zIndex: -1}} />
            <img src={cornerFlowerTopRgt} alt="" className='leftCornerFlower' style={{position: "absolute", height: "auto", width: "43%", top: 0, right: 0,zIndex: -1}} />
            <TesteNameContainer3>
                <h3>Teste de personalidade</h3>
                <p>Um teste rápido para</p>
                    <p> se entender melhor!</p>
            </TesteNameContainer3>
        </FlowerContainer3>
        <FlowerContainer4>
            <img src={cornerFlower} alt="" className='leftCornerFlower' style={{position: "absolute", height: "auto", width: "43%", top: 0, left: 0,zIndex: -1}} />
            <img src={cornerFlowerBtmLft} alt="" className='leftCornerFlower' style={{position: "absolute", height: "auto", width: "43%", bottom: 0, right: 0,zIndex: -1}} />
            <TesteNameContainer4>
                <h3>Teste de personalidade</h3>
                <p>Um teste rápido para</p>
                    <p> se entender melhor!</p>
            </TesteNameContainer4>
        </FlowerContainer4>
        </div>
            </>
    );
};

export default Quiz;
