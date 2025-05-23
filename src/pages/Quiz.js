import React, { useState } from 'react';
import styled from 'styled-components';

const QuizContainer = styled.div`
  max-width: 600px;
  margin: 3rem auto;
  background: rgba(0,0,0,0.85);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.5);
  padding: 2rem;
  color: #fff;
`;

const Question = styled.h2`
  font-family: 'Anton', sans-serif;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
`;

const OptionsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Option = styled.li`
  background: #222;
  border-radius: 8px;
  margin-bottom: 1rem;
  padding: 0.8rem 1rem;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  border: 2px solid transparent;
  transition: background 0.2s, border 0.2s;
  &:hover {
    background: #ff0000;
    color: #fff;
  }
  ${({ correct, selected }) =>
    selected &&
    (correct ? 'border: 2px solid #00e676;' : 'border: 2px solid #ff1744;')}
`;

const NextButton = styled.button`
  background: #ff0000;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 2rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 1.5rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #cc0000;
  }
`;

const Score = styled.div`
  font-family: 'Anton', sans-serif;
  font-size: 2rem;
  color: #00e676;
  margin-top: 2rem;
  text-align: center;
`;

const quizQuestions = [
  {
    question: "What is Eminem's real name?",
    options: [
      'Marshall Mathers',
      'Calvin Cordozar',
      'Curtis Jackson',
      'Andre Young',
    ],
    answer: 0,
  },
  {
    question: "Which Eminem album features the song 'Stan'?",
    options: [
      'Encore',
      'The Marshall Mathers LP',
      'Relapse',
      'Kamikaze',
    ],
    answer: 1,
  },
  {
    question: "Who is Eminem's daughter?",
    options: [
      'Hailie',
      'Ivy',
      'Blue',
      'North',
    ],
    answer: 0,
  },
  {
    question: "Which movie did Eminem star in?",
    options: [
      'Get Rich or Die Tryin’',
      '8 Mile',
      'Straight Outta Compton',
      'Notorious',
    ],
    answer: 1,
  },
  {
    question: "What is Eminem's alter ego called?",
    options: [
      'Slim Shady',
      'Dr. Dre',
      '50 Cent',
      'Jay-Z',
    ],
    answer: 0,
  },
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (idx) => {
    if (selected === null) {
      setSelected(idx);
      if (idx === quizQuestions[current].answer) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    if (current < quizQuestions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setShowScore(true);
    }
  };

  return (
    <QuizContainer>
      {!showScore ? (
        <>
          <Question>{quizQuestions[current].question}</Question>
          <OptionsList>
            {quizQuestions[current].options.map((opt, idx) => (
              <Option
                key={opt}
                onClick={() => handleOptionClick(idx)}
                selected={selected === idx}
                correct={selected === idx && idx === quizQuestions[current].answer}
              >
                {opt}
              </Option>
            ))}
          </OptionsList>
          {selected !== null && (
            <NextButton onClick={handleNext}>
              {current === quizQuestions.length - 1 ? 'Finish' : 'Next'}
            </NextButton>
          )}
        </>
      ) : (
        <Score>
          You scored {score} out of {quizQuestions.length}!
        </Score>
      )}
    </QuizContainer>
  );
};

export default Quiz; 