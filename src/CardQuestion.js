import React from "react";
import { Card } from "primereact/card";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

export default function CardQuestion({ item, onClick }) {
  return (
    <div
      className={
        item.rotate
          ? "card-rotate flex justify-content-center"
          : "card flex justify-content-center"
      }
    >
      {item.rotate ? (
        <Card className="md:w-25rem" onClick={onClick}>
          {item.answer}
        </Card>
      ) : (
        <Card title="Question" className="md:w-25rem" onClick={onClick}>
          {item.question}
          <h5>Options</h5>
          <ul>
            {item.options.map((option, i) => {
              return <li key={i}>{option}</li>;
            })}
          </ul>
        </Card>
      )}
    </div>
  );
}
