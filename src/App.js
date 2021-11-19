import { useState } from "react";
import End from "./components/End";
import Login from "./components/Login";
import Question from "./components/Question";
import quizData from './data/quiz.json';
function App() {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answer, setAnswer] = useState([]);

  const quizStartHandler = () => {
    setStep(2);
  }

  return (
    <div className="App">
       {step === 1 && <Login onQuizStart={quizStartHandler} />}
       {step === 2 && <Question
        data={quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswer}
        numberOfQuestions={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
       />}
       {step === 3 &&  <End
        results={answer}
        data={quizData.data}
       />}    
    </div>
  );
}

export default App;