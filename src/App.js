import CardQuestion from "./CardQuestion";
import "./styles.css";
import { questionData } from "./constData";
import { useState } from "react";
export default function App() {
  const [open, setOpen] = useState(false);
  function handleCardTransition(id) {
    console.log(id);
    questionData[id].rotate = !questionData[id].rotate;
    setOpen(!open);
  }
  return (
    <div className="App">
      {questionData.map((item, i) => {
        return (
          <CardQuestion
            item={item}
            key={i}
            onClick={() => handleCardTransition(i)}
          />
        );
      })}
    </div>
  );
}
