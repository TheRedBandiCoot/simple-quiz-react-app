import { Options } from './Options';
import { Question } from './Question';
import { Score } from './Score';
import { QuestionNum } from './QuestionNum';
import '../css/App.css';
import useQuizQuestHooks from '../hooks/useQuizQuestHook';

function App() {
  const { filteredQuiz, displayScore, handleOptionBtn, handleResetQuiz, score, data } = useQuizQuestHooks();

  const { id, options, question } = filteredQuiz[0];

  return (
    <div className="container">
      {displayScore || <QuestionNum id={id} data={data} />}
      {displayScore ? (
        <Score data={data} score={score} handleResetQuiz={handleResetQuiz} />
      ) : (
        <Question question={question} />
      )}
      <Options displayScore={displayScore} handleOptionBtn={handleOptionBtn} options={options} />
    </div>
  );
}

export default App;
