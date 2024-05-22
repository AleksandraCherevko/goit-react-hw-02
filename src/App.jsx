import "./App.css";
import { useState } from "react";

const App = () => {
  // Ініціалізація стану для типів відгуків
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Функції для оновлення стану
  const handleGoodFeedback = () =>
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      good: prevFeedback.good + 1,
    }));
  const handleNeutralFeedback = () =>
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      neutral: prevFeedback.neutral + 1,
    }));
  const handleBadFeedback = () =>
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      bad: prevFeedback.bad + 1,
    }));

  return (
    <div>
      <h1>Feedback</h1>
      <button onClick={handleGoodFeedback}>Good</button>
      <button onClick={handleNeutralFeedback}>Neutral</button>
      <button onClick={handleBadFeedback}>Bad</button>

      <h2>Statistics</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
    </div>
  );
};

export default App;
