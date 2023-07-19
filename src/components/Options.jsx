import React from 'react';
export function Options({ displayScore, handleOptionBtn, options }) {
  return (
    <ul className="options">
      {displayScore ||
        options.map((opt) => {
          const { id, option, isCorrect } = opt;
          return (
            <li key={id}>
              <button className="btn" data-correct={id} onClick={handleOptionBtn} type="button">
                {option}
              </button>
            </li>
          );
        })}
    </ul>
  );
}
