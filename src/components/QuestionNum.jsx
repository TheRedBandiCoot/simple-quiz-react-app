import React from 'react';
export function QuestionNum({ id, data }) {
  return (
    <section className="header">
      <h1>
        Question {id}/{data.length}
      </h1>
    </section>
  );
}
