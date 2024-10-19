import { useCallback, useState } from 'react';
import QUESTIONS from '../questions.js';
import quizCompletedImg from '../assets/quiz-complete.png';
import Question from './Question.jsx';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const isQuizCompleted = QUESTIONS.length === activeQuestionIndex;
 
  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }, [])

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

  if (isQuizCompleted) {
    return (
      <div id="summary">
        <img src={quizCompletedImg} alt="Trophy icon" />
        <h2>Quiz completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
