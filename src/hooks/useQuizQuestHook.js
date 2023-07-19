import { useState } from 'react';
import quizData from '../db/data';

const useQuizQuestHooks = () => {
  const [quiz, setQuiz] = useState({
    data: quizData,
    questNo: 1,
    score: 0,
    displayScore: false,
  });
  const { score, questNo, displayScore, data } = quiz;

  const filteredQuiz = data.filter((quest) => quest.id === questNo);

  const handleOptionBtn = (e) => {
    const value = JSON.parse(e.target.dataset.correct);
    const isCorrect = data[questNo - 1].options.filter((option) => option.id === value)[0].isCorrect;
    if (isCorrect) setQuiz((prev) => ({ ...prev, score: prev.score + 10 }));
    if (questNo >= data.length) return setQuiz((prev) => ({ ...prev, displayScore: true }));
    setQuiz((prev) => ({ ...prev, questNo: prev.questNo + 1 }));
  };

  const handleResetQuiz = () => {
    setQuiz({ ...quiz, questNo: 1, score: 0, displayScore: false });
  };

  return { filteredQuiz, score, handleOptionBtn, handleResetQuiz, displayScore, data };
};

export default useQuizQuestHooks;
