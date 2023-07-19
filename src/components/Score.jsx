import React from 'react';
export function Score({ score, handleResetQuiz, data }) {
  return (
    <div>
      <h2>Your Score</h2>
      <h1>
        {score}/{data.length * 10}
      </h1>
      <button onClick={handleResetQuiz} className="btn" type="button">
        Reset Quiz
      </button>
    </div>
  );
}
